import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Region, Polyline } from 'react-native-maps';
import { getIcon } from '../../../utils/GetIcon';
import { GarbageData } from '../../../types/type';

interface MyMapProps {
  data: GarbageData[];
  navigationHook: (location: string, matched: boolean,garbageId: number) => void;
}

const MyMap: React.FC<MyMapProps> = ({ data, navigationHook }) => {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      const latitudes = data.map((item) => item.latitude);
      const longitudes = data.map((item) => item.longitude);

      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLon = Math.min(...longitudes);
      const maxLon = Math.max(...longitudes);

      const latitude = (minLat + maxLat) / 2;
      const longitude = (minLon + maxLon) / 2;
      const latitudeDelta = maxLat - minLat + 0.01;
      const longitudeDelta = maxLon - minLon + 0.01;

      setRegion({
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      });
    } else {
      setRegion(null);
    }
  }, [data]);

  const handleMarkerPress = (garbageId: number, location: string, matched: boolean) => {
    navigationHook(location, matched, garbageId);
  };
  

  const adjustMarkerPosition = (latitude: number, longitude: number, index: number) => {
    const offset = 0.00003;
    return {
      latitude: latitude,
      longitude: longitude + offset * index,
    };
  };

  const userLocation = data.find(item => item.daysSinceRegistration === -1);

  if (!region) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', width: '100%', height: '70%' }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        provider="google"
      >
     {data.map((item, index) => (
  <Marker
    key={item.garbageId}
    coordinate={adjustMarkerPosition(item.latitude, item.longitude, index)}
    title={item.location}
    onPress={() => handleMarkerPress(item.garbageId, item.location, item.matched)} // garbageId를 포함해 모든 데이터를 정확히 전달
  >
    {getIcon(item.daysSinceRegistration)}
  </Marker>
))}
        {userLocation && data.map((item) => {
          if (item.daysSinceRegistration !== -1) {
            return (
              <Polyline
                key={`polyline-${item.garbageId}`}
                coordinates={[
                  { latitude: userLocation.latitude, longitude: userLocation.longitude },
                  { latitude: item.latitude, longitude: item.longitude }
                ]}
                strokeColor="#8000FF"
                strokeWidth={2}
              />
            );
          }
          return null;
        })}
      </MapView>
    </View>
  );
}

export default MyMap;
