import React, { useState, useEffect, useRef } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { collectorLocation } from '../../../service/collector';
import CustomToast from '../../common/atoms/CustomToast';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface WatchLocationProps {
  garbageId: number;
  onLocationChange: (location: ILocation) => void;
  stopTracking: boolean;
}

const WatchLocation: React.FC<WatchLocationProps> = ({ garbageId, onLocationChange, stopTracking }) => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [toastVisible, setToastVisible] = useState(false); 
  const isLoading = useRef(false);
  const lastSentTime = useRef<number>(Date.now());

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500);
  };

  const sendLocation = async (location: ILocation) => {
    const currentTime = Date.now();
    const timeSinceLastSend = currentTime - lastSentTime.current;

    if (timeSinceLastSend < 15000 || isLoading.current) return; 

    isLoading.current = true;
    lastSentTime.current = currentTime;

    try {
      await collectorLocation({
        garbageId,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      console.log(`Location sent: Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
    } catch (error) {
      console.error('Failed to send location:', error);
      showToast();
    } finally {
      isLoading.current = false;
    }
  };

  useEffect(() => {
    let watchId: number | null = null;

    if (!stopTracking) {
      watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude };
          setLocation(newLocation);
          onLocationChange(newLocation);
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
    }

    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
        watchId = null;
      }
    };
  }, [location, garbageId, onLocationChange, stopTracking]);

  return (
    <>  
      <CustomToast message="Pengiriman telah gagal." visible={toastVisible} />
    </>
  );
};

export default WatchLocation;
