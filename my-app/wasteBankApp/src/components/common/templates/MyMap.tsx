import React from 'react';
import MapView from 'react-native-maps';

export default function MyMap() {
    return (
        <MapView 
        style={{flex:1}}
        initialRegion={{
        latitude: 37.541,
        longitude: 126.986,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }} 
        provider="google"
      >
      </MapView>
      );
}
