import React, { useState } from 'react';
import { View } from 'react-native';
import IndividualTrashMapTemplate from '../../components/collector/templates/IndividualTrashMapTemplate';
import WatchLocation from '../../components/collector/organisms/WatchLocation';
import { useCollectorLocation } from '../../hooks/useCollectorLoaction';
import CustomText from '../../components/common/atoms/CustomText';
import CustomButton from '../../components/common/atoms/CustomButton';
import styled from 'styled-components';
import { scale } from '../../utils/Scale';
import { collectDone } from '../../service/collector';
import { useNav } from '../../hooks/useNav';
import { useRoute } from '@react-navigation/native';
import { GarbageData } from '../../types/type';
import Loading from '../../components/common/atoms/Loading';
import CustomToast from '../../components/common/atoms/CustomToast';

const CustomBox = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${scale(30)}px;
`;

const IndividualTrashMapScreen = () => {
  const { userLocation, handleLocationChange } = useCollectorLocation();
  const navigation = useNav();
  const route = useRoute();
  const [isTracking, setIsTracking] = useState(true); // 위치 추적 상태 관리 추가

  const params = route.params as { data?: GarbageData };

  if (!params || !params.data) {
    console.error("No data found in route parameters");
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomText>Data not available</CustomText>
      </View>
    );
  }

  const { data } = params;

  const [isLoading, setIsLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };


  const handleOnPress = async () => {
    if (data.garbageId) {
      try {
        setIsLoading(true);
        await collectDone({ garbageId: data.garbageId });
        setIsTracking(false);  // 위치 전송 멈춤
        navigation.push("Main");  
      } catch (error) {
        showToast();
        console.error('Failed to complete collect:', error);
      }finally {
        setIsLoading(false);
      }
    } else {
      showToast();
      console.error('Garbage ID is missing');
    }
  };

  const combinedData = userLocation ? [userLocation, data] : [data];


  return (
    <>
      {isLoading ? (
        <Loading width={100} height={100} loop={true} />
      ) : (
        <>
      <IndividualTrashMapTemplate data={combinedData} />
      {isTracking && (
        <WatchLocation 
          onLocationChange={handleLocationChange} 
          garbageId={data.garbageId}
          stopTracking={!isTracking}  // stopTracking 속성 추가
        />
      )}
      <CustomBox>
        <CustomButton size="sm" label="Selesai" onPress={handleOnPress} /> 
      </CustomBox>
      </>
    )}
  <CustomToast message="Terjadi kesalahan." visible={toastVisible} />
</>
  );
};

export default IndividualTrashMapScreen;
