import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Label = Styled.Text`
    font-size: 24px;
`;

interface ILocation {
  latitude: number;
  longitude: number;
}

interface WatchLocationProps {
  onLocationChange: (location: ILocation) => void;
}

const WatchLocation: React.FC<WatchLocationProps> = ({ onLocationChange }) => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
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

    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, [onLocationChange]);

  return (
    <Container>
      {location ? (
        <>
          <Label>Latitude: {location.latitude}</Label>
          <Label>Longitude: {location.longitude}</Label>
        </>
      ) : (
        <Label>Loading...</Label>
      )}
    </Container>
  );
};

export default WatchLocation;
