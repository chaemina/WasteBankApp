import React from 'react';
import IndividualTrashMapTemplate from '../../components/collector/templates/IndividualTrashMapTemplate';
import WatchLocation from '../../components/collector/organisms/WatchLocation';
import { useUserLocation } from '../../hooks/useCollectorLoaction';


const IndividualTrashMapScreen = () => {
  const { userLocation, handleLocationChange } = useUserLocation();

  const data = {
    success: true,
    response: [
      {
        garbageId: 3,
        location: '광주광역시 북구 123로 45',
        latitude: 37.4219984,
        longitude: -122.083,
        matched: true,
        daysSinceRegistration: 2,
      },
    ],
    error: null,
  };

  const combinedData = userLocation ? [...data.response, userLocation] : data.response;

  return (
    <>
      <IndividualTrashMapTemplate data={combinedData} />
      <WatchLocation onLocationChange={handleLocationChange} />
    </>
  );
};

export default IndividualTrashMapScreen;
