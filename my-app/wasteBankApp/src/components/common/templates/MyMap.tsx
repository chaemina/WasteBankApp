import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getIcon } from '../../../utils/GetIcon';

const data = {
  "success": true,
  "response": [
      {
          "garbageId": 1,
          "location": "광주광역시 북구 123로 45",
          "latitude":  37.541,
          "longitude": 126.985,
          "matched": false,
          "daysSinceRegistration": 0
      },
      {
          "garbageId": 2,
          "location": "광주광역시 북구 123로 45",
          "latitude":  37.541,
          "longitude": 126.986,
          "matched": false,
          "daysSinceRegistration": 1
      },
      {
          "garbageId": 3,
          "location": "광주광역시 북구 123로 45",
          "latitude":  37.541,
          "longitude": 126.987,
          "matched": false,
          "daysSinceRegistration": 2
      }
  ],
  "error": null
};


export default function MyMap() {
  return (
    <View style={{ flexDirection: 'row', width: '100%', height: '70%' }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.541,
          longitude: 126.986,
          latitudeDelta: 0.005,
          longitudeDelta: 0.02,
        }}
        provider="google"
      >
        {data.response.map((item) => (
          <Marker
            key={item.garbageId}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={`Garbage ID: ${item.garbageId}`}
            description={`Location: ${item.location}`}
          >
            {getIcon(item.daysSinceRegistration)}
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
