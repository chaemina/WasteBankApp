import { useState } from 'react';
import { GarbageData } from '../types/type';

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<GarbageData | null>(null);

  const handleLocationChange = (location: { latitude: number; longitude: number }) => {
    const userLocationData: GarbageData = {
      garbageId: -1, 
      location: 'User Location',
      latitude: location.latitude,
      longitude: location.longitude,
      matched: false,
      daysSinceRegistration: -1,
    };
    setUserLocation(userLocationData);
  };

  return {
    userLocation,
    handleLocationChange,
  };
};
