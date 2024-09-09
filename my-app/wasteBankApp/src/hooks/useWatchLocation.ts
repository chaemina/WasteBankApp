import { useEffect, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

interface Location {
  latitude: number;
  longitude: number;
}

export const useWatchLocation = (isCollecting: boolean) => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isCollecting) {
      intervalId = setInterval(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
            console.log(`Updated Location: Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
          }
        );
      }, 30000); // 30초마다 위치 업데이트
    }

    // 페이지를 벗어나거나 수거가 완료되면 위치 업데이트 중지
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isCollecting]);

  return currentLocation;
};
