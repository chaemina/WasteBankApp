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

  const handleOnPress = async () => {
    if (data.garbageId) {
      try {
        await collectDone({ garbageId: data.garbageId });
        setIsTracking(false);  // 위치 전송 멈춤
        navigation.push("Main");  
      } catch (error) {
        console.error('Failed to complete collect:', error);
      }
    } else {
      console.error('Garbage ID is missing');
    }
  };

  const combinedData = userLocation ? [data, userLocation] : [data];

  return (
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
        <CustomButton size="sm" label="Done" onPress={handleOnPress} /> 
      </CustomBox>
    </>
  );
};

export default IndividualTrashMapScreen;
