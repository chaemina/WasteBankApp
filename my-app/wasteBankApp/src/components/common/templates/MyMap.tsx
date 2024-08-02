import React from 'react';
import { View, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getIcon } from '../../../utils/GetIcon';
import { GarbageData } from '../../../types/type';

interface MyMapProps {
  data: GarbageData[];
}

const MyMap: React.FC<MyMapProps> = ({ data }) => {
  const handleMarkerPress = (garbageId: number) => {
    Alert.alert(`Marker ${garbageId} pressed`);
  };

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
        {data.map((item) => (
          <Marker
            key={item.garbageId}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={`Garbage ID: ${item.garbageId}`}
            description={`Location: ${item.location}`}
            onPress={item.matched ? undefined : () => handleMarkerPress(item.garbageId)}
          >
            {getIcon(item.daysSinceRegistration)}
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

export default MyMap;
