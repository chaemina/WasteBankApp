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
import { useRoute, RouteProp, CurrentRenderContext } from '@react-navigation/native';
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
  const [data, setData] = useState<GarbageData | null>(
    route.params?.data || null
  );
  const currentLocation = useWatchLocation();
  const { userLocation, handleLocationChange } = useCollectorLocation();
  const garbageId = data?.garbageId || route.params?.garbageId;



  if (garbageId !== undefined) {
    const { sendLocation } = useSendLocation(garbageId);
  
    useEffect(() => {
      if (currentLocation?.latitude && currentLocation?.longitude) {
        handleLocationChange({
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        });
        sendLocation(currentLocation); // garbageId가 있을 때만 실행
      }
    }, [currentLocation]);
  }

  useEffect(() => {
    const fetchGarbageData = async () => {
      const garbageId = route.params?.garbageId;
      if (garbageId && !data) {  // 데이터가 없는 경우에만 API 요청을 보냄 (수거중인 쓰레기 위치 확인)
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
            setData(fetchedData);  // 응답 데이터를 상태로 설정
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
  }, [route.params, data]);  // 데이터가 변할 때마다 useEffect 실행

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500);
  };

  const handleOnPress = async () => {
    if (data?.garbageId) {
      try {
        setIsLoading(true);
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

  currentLocation?.latitude
  currentLocation?.longitude

  const combinedData = [userLocation,data].filter((item): item is GarbageData => item !== null);

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
                <CustomText color='green' size='caption'>Diperlukan waktu 30 detik untuk mengambil lokasi Anda...</CustomText>
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
