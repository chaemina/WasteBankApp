import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { collectorLocation } from '../../../service/collector';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface WatchLocationProps {
  garbageId: number;
  onLocationChange: (location: ILocation) => void;
  stopTracking: boolean; // 추가: 추적 중지 여부
}

const WatchLocation: React.FC<WatchLocationProps> = ({ garbageId, onLocationChange, stopTracking }) => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    let watchId: number | null = null;
    let intervalId: NodeJS.Timeout | null = null;

    const sendLocation = async (location: ILocation) => {
      try {
        // 서버로 위치 정보를 전송
        await collectorLocation({
          garbageId,
          latitude: location.latitude,
          longitude: location.longitude,
        });
        console.log(`Location sent: Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
      } catch (error) {
        console.error('Failed to send location:', error);
      }
    };

    if (!stopTracking) {
      watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude };
          setLocation(newLocation);
          onLocationChange(newLocation);

          // 실시간 위치 전송
          sendLocation(newLocation);
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        },
      );

      // 위치를 주기적으로 서버에 전송
      intervalId = setInterval(() => {
        if (location) {
          sendLocation(location);
        }
      }, 5000); // 5초마다 위치를 전송
    }

    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
        watchId = null;
      }
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, [location, garbageId, onLocationChange, stopTracking]);

  return null;
};

export default WatchLocation;
