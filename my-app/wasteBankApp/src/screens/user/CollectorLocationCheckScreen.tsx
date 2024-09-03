import React, { useEffect } from 'react';
import { LocationData } from '../../constants/MarkerInfo';
import CollectorLocationCheck from "../../components/user/templates/CollectorLocationCheck";
import { useUserLocation } from '../../hooks/useCollectorLoaction';

const CollectorLocationCheckScreen = () => {
  const { userLocation, handleLocationChange } = useUserLocation();

  useEffect(() => {
    // LocationData에서 위도와 경도 추출
    const { latitude, longitude } = LocationData.response;
    
    // 위치를 설정
    handleLocationChange({ latitude, longitude });
  }, [handleLocationChange]);

  // userLocation이 설정되지 않았다면 빈 배열로 전달
  const locationDataArray = userLocation ? [userLocation] : [];

  return (
    <>
      <CollectorLocationCheck data={locationDataArray} />
    </>
  );
};

export default CollectorLocationCheckScreen;
