import { useRef, useState } from 'react';
import { collectorLocation } from '../service/collector';


interface ILocation {
  latitude: number;
  longitude: number;
}

const useSendLocation = (garbageId: number) => {
  const [toastVisible, setToastVisible] = useState(false);
  const isLoading = useRef(false);
  const lastSentTime = useRef<number>(Date.now());

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500);
  };

  const sendLocation = async (location: ILocation) => {
    const currentTime = Date.now();
    const timeSinceLastSend = currentTime - lastSentTime.current;

    if (timeSinceLastSend < 15000 || isLoading.current) return;

    isLoading.current = true;
    lastSentTime.current = currentTime;

    try {
      await collectorLocation({
        garbageId,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      console.log(`Location sent: Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
    } catch (error) {
      console.error('Failed to send location:', error);
      showToast();
    } finally {
      isLoading.current = false;
    }
  };

  return { sendLocation, toastVisible };
};

export default useSendLocation;
