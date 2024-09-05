import React, { useState } from 'react';
import useWatchLocation from '../hooks/useWatchLocation';
import {View, Text } from 'react-native';

const LocationTest = () => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  // 위치 변경 시 호출되는 콜백 함수
  const handleLocationChange = (location: { latitude: number; longitude: number }) => {
    setUserLocation(location);
  };

  // useWatchLocation 훅을 사용하여 위치 추적
  useWatchLocation({
    onLocationChange: handleLocationChange,
    stopTracking: false, // 추적을 멈추려면 true로 변경
  });

  return (
    <View>
      <Text>사용자 위치 테스트</Text>
      {userLocation ? (
        <Text>
          현재 위치: 위도 {userLocation.latitude}, 경도 {userLocation.longitude}
        </Text>
      ) : (
        <Text>위치 정보를 가져오는 중...</Text>
      )}
    </View>
  );
};

export default LocationTest;
