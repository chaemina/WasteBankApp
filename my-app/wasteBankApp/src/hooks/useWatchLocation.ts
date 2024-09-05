import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface UseWatchLocationProps {
  onLocationChange: (location: ILocation) => void;
  stopTracking: boolean;
}

const useWatchLocation = ({ onLocationChange, stopTracking }: UseWatchLocationProps) => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    let watchId: number | null = null;

    if (!stopTracking) {
      watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude };
          setLocation(newLocation);
          onLocationChange(newLocation);
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
  }, [onLocationChange, stopTracking]);

  return location;
};

export default useWatchLocation;
