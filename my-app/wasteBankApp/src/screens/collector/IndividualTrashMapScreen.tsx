import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import IndividualTrashMapTemplate from '../../components/collector/templates/IndividualTrashMapTemplate';
import useSendLocation from '../../hooks/useSendLocation';
import { useCollectorLocation } from '../../hooks/useCollectorLoaction';
import CustomText from '../../components/common/atoms/CustomText';
import CustomButton from '../../components/common/atoms/CustomButton';
import styled from 'styled-components';
import { scale } from '../../utils/Scale';
import { collectDone } from '../../service/collector';
import { garbageLocation } from '../../service/garbage';
import { useNav } from '../../hooks/useNav';
import { useRoute, RouteProp } from '@react-navigation/native';
import { GarbageData } from '../../types/type';
import Loading from '../../components/common/atoms/Loading';
import CustomToast from '../../components/common/atoms/CustomToast';
import { useWatchLocation } from '../../hooks/useWatchLocation';

type RouteParams = {
  IndividualTrashMapView: {
    data?: GarbageData;
    garbageId?: number;
  };
};

const CustomBox = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${scale(30)}px;
`;

const IndividualTrashMapScreen = () => {
  const navigation = useNav();
  const route = useRoute<RouteProp<RouteParams, 'IndividualTrashMapView'>>();
  const [isLoading, setIsLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isCollecting, setIsCollecting] = useState(true);  // 수거 중인 동안 true
  const [data, setData] = useState<GarbageData | null>(
    route.params?.data || null
  );
  const currentLocation = useWatchLocation(isCollecting);  // isCollecting 전달
  const { userLocation, handleLocationChange } = useCollectorLocation();
  const garbageId = data?.garbageId || route.params?.garbageId;

  if (garbageId !== undefined) {
    const { sendLocation } = useSendLocation(garbageId);
  
    useEffect(() => {
      if (currentLocation?.latitude && currentLocation?.longitude && isCollecting) {
        handleLocationChange({
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        });
        sendLocation(currentLocation);
      }
    }, [currentLocation, isCollecting]); 
  }

  useEffect(() => {
    const fetchGarbageData = async () => {
      const garbageId = route.params?.garbageId;
      if (garbageId && !data && isCollecting) {  
        try {
          setIsLoading(true);
          const response = await garbageLocation({ garbageId });
          if (response.success && response.response) {
            const fetchedData: GarbageData = {
              garbageId: response.response.garbageId,
              location: response.response.location,
              latitude: response.response.latitude,
              longitude: response.response.longitude,
              matched: true,
              daysSinceRegistration: 0,
            };
            setData(fetchedData);
          } else {
            showToast();
            console.error('Invalid API response structure:', response);
          }
        } catch (error) {
          showToast();
          console.error('Failed to fetch garbage location:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchGarbageData();
  }, [route.params, data]);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500);
  };

  const handleOnPress = async () => {
    if (data?.garbageId) {
      try {
        setIsLoading(true);
        setIsCollecting(false);  // 수거 완료 시 수집 중지
        await collectDone({ garbageId: data.garbageId });
        navigation.push("Main");
      } catch (error) {
        showToast();
        console.error('Failed to complete collect:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      showToast();
      console.error('Garbage ID is missing');
    }
  };

  const combinedData = [userLocation, data].filter((item): item is GarbageData => item !== null);

  return (
    <>
      {isLoading ? (
        <Loading width={100} height={100} loop={true} />
      ) : (
        <>
          {data ? (
            <>
              <IndividualTrashMapTemplate data={combinedData} />
              <CustomBox>
                <CustomButton size="sm" label="Selesai" onPress={handleOnPress} /> 
                {isCollecting && (
                  <CustomText color='green' size='caption'>
                    Diperlukan waktu 30 detik untuk mengambil lokasi Anda...
                  </CustomText>
                )}
              </CustomBox>
            </>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <CustomText>Data not available</CustomText>
            </View>
          )}
        </>
      )}
      <CustomToast message="Terjadi kesalahan." visible={toastVisible} />
    </>
  );
};

export default IndividualTrashMapScreen;