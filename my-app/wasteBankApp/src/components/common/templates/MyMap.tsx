import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
            onPress={() => handleMarkerPress(item.location, item.matched)}
          >
            {getIcon(item.daysSinceRegistration)}
          </Marker>
        ))}
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
