import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Region, Polyline } from 'react-native-maps';
import { getIcon } from '../../../utils/GetIcon';
import CustomAlert from '../atoms/CustomAlert';
import { GarbageData } from '../../../types/type';
import { useNav } from '../../../hooks/useNav';
import useModal from '../../../hooks/useModal';

interface MyMapProps {
  data: GarbageData[];
}

const MyMap: React.FC<MyMapProps> = ({ data }) => {
  const { modalVisible, selectedId, openModal, closeModal } = useModal();
  const navigation = useNav();
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
      setRegion(null); // 데이터를 초기화하여 지도 대신 메시지를 표시
    }
  }, [data]);

  const handleMarkerPress = (location: string, matched: boolean) => {
    if (matched) {
      navigation.push('TrashInfo', { matched });
    } else {
      openModal(location);
    }
  };

  const handleAlertClick = () => {
    console.log('Okay clicked');
    navigation.push('TrashInfo', { matched: false });
    closeModal();
  };

  const userLocation = data.find(item => item.daysSinceRegistration === -1); // 사용자의 위치를 찾음

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
        {data.map((item) => (
          <Marker
            key={item.garbageId}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={`Garbage ID: ${item.garbageId}`}
            description={`Location: ${item.location}`}
            onPress={() => handleMarkerPress(item.location, item.matched)}
          >
            {getIcon(item.daysSinceRegistration)}
          </Marker>
        ))}

        {/* Polyline으로 사용자 위치와 쓰레기 위치를 연결 */}
        {userLocation && data.map((item) => {
          if (item.daysSinceRegistration !== -1) { // 쓰레기 위치와 사용자 위치를 연결
            return (
              <Polyline
                key={`polyline-${item.garbageId}`}
                coordinates={[
                  { latitude: userLocation.latitude, longitude: userLocation.longitude },
                  { latitude: item.latitude, longitude: item.longitude }
                ]}
                strokeColor="#8000FF" // 선 색상
                strokeWidth={2} // 선 두께
              />
            );
          }
          return null;
        })}
      </MapView>

      {selectedId !== null && (
        <CustomAlert
          title={`${selectedId}`}
          text={``}
          visible={modalVisible}
          onClose={closeModal}
          onClick={handleAlertClick}
        />
      )}
    </View>
  );
}

export default MyMap;
