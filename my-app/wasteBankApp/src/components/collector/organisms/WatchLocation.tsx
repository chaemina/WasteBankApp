import React from 'react';
import CustomToast from '../../common/atoms/CustomToast';
import useWatchLocation from '../../../hooks/useWatchLocation';
import useSendLocation from '../../../hooks/useSendLocation';

interface ILocation {
  latitude: number;
  longitude : number;
}

interface WatchLocationProps {
  garbageId: number;
  onLocationChange: (location: ILocation) => void;
  stopTracking: boolean;
}

const WatchLocation: React.FC<WatchLocationProps> = ({ garbageId, onLocationChange, stopTracking }) => {
  const location = useWatchLocation({ onLocationChange, stopTracking });
  const { sendLocation, toastVisible } = useSendLocation(garbageId);

  // 위치가 변경될 때마다 위치 전송
  React.useEffect(() => {
    if (location) {
      sendLocation(location);
    }
  }, [location, sendLocation]);

  return (
    <>
      <CustomToast message="Pengiriman telah gagal." visible={toastVisible} />
    </>
  );
};

export default WatchLocation;
