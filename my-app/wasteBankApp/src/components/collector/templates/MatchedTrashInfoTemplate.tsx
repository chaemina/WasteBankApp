import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomText from '../../common/atoms/CustomText';
import CustomButton from '../../common/atoms/CustomButton';
import { useNav } from '../../../hooks/useNav';
import TrashInfo from './TrashInfo';
import { collectStart } from '../../../service/collector';
import { GarbageData } from '../../../types/type';

interface MatchedTrashInfoTemplateProps {
  garbageId: number;
}

const MatchedTrashInfoTemplate: React.FC<MatchedTrashInfoTemplateProps> = ({ garbageId }) => {
  const navigation = useNav();

  const handleOnPress = async () => {
    if (garbageId) {
      try {
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
        console.error('Failed to start collect:', error || 'Unknown error occurred');
      }
    } else {
      console.error('Garbage ID is missing');
    }
  };

  return (
    <ScrollContainer>
      <TrashInfo garbageId={garbageId} />
      <CustomButton size="sm" label="Awal" onPress={handleOnPress} />
    </ScrollContainer>
  );
};

export default MatchedTrashInfoTemplate;
