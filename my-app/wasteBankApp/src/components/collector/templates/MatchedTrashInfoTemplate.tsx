import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomText from '../../common/atoms/CustomText';
import CustomButton from '../../common/atoms/CustomButton';
import { useNav } from '../../../hooks/useNav';
import TrashInfo from './TrashInfo';
import { collectStart } from '../../../service/collector';
import { GarbageData } from '../../../types/type';
import Loading from '../../common/atoms/Loading';
import CustomToast from '../../common/atoms/CustomToast';

interface MatchedTrashInfoTemplateProps {
  garbageId: number;
}

const MatchedTrashInfoTemplate: React.FC<MatchedTrashInfoTemplateProps> = ({ garbageId }) => {
  const navigation = useNav();
  const [isLoading, setIsLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };


  const handleOnPress = async () => {
    if (garbageId) {
      try {
        setIsLoading(true);
        const response = await collectStart({ garbageId });


        console.log('collectStart response:', response);


        if (response && response.garbageId) {
          const data: GarbageData = {
            garbageId: response.garbageId,
            location: response.location,
            latitude: response.latitude,
            longitude: response.longitude,
            matched: true,
            daysSinceRegistration: 0,
          };

      
          navigation.push("IndividualTrashMapView", { data });
        } else {
          console.error('Failed to collect garbage: Invalid response structure');
        }
      } catch (error) {
        showToast();
        console.error('Failed to start collect:', error || 'Unknown error occurred');
      }finally {
        setIsLoading(false);
      }
    } else {
      console.error('Garbage ID is missing');
    }
  };

  return (
    <>
    {isLoading ? (
      <Loading width={100} height={100} loop={true} />
    ) : (
    <ScrollContainer>
      <TrashInfo garbageId={garbageId} />
      <CustomButton size="sm" label="Awal" onPress={handleOnPress} />
    </ScrollContainer>
     )}
     <CustomToast message="Permintaan gagal." visible={toastVisible} />
   </>
  );
};

export default MatchedTrashInfoTemplate;
