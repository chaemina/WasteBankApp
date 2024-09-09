import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

interface Location {
  latitude: number;
  longitude: number;
}

const LocationTest: React.FC = () => {
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
    const intervalId = setInterval(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          // 위치가 갱신될 때마다 콘솔에 출력
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
    }, 5000); // 5초마다 위치 업데이트

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View>
      <Text style={styles.title}>Geolocation Tutorial</Text>
      {currentLocation ? (
        <Text style={styles.title}>
          {currentLocation.latitude} / {currentLocation.longitude}
        </Text>
      ) : (
        <Text style={styles.title}>location undefined</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    margin: 15,
    color: "black",
    fontWeight: "600",
  },
});

export default LocationTest;
