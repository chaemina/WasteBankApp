import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomButton from '../../common/atoms/CustomButton';
import CustomText from '../../common/atoms/CustomText';
import styled from 'styled-components/native';
import DatePicker from '../../common/atoms/DatePicker';
import useModal from '../../../hooks/useModal';
import TrashInfo from './TrashInfo';
import { useNav } from '../../../hooks/useNav';
import { garbageAccept } from '../../../service/garbage';

const DateBox = styled.View`
  width: 90%;
  margin-top: 20px;
  align-items: center;
`;

interface NotMatchedTrashInfoTemplateProps {
  garbageId: number;
}

const NotMatchedTrashInfoTemplate: React.FC<NotMatchedTrashInfoTemplateProps> = ({ garbageId }) => {
  const navigation = useNav();
  const { modalVisible, openModal, closeModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const SelectDateButtonPress = () => {
    openModal();
  };

  const handleAcceptButton = async () => {
    if (garbageId && selectedDate) {
      try {
        await garbageAccept({ garbageId, collectionDate: selectedDate });
        navigation.push('Main');
      } catch (error) {
        console.error('Failed to accept garbage:', error);
      }
    } else {
      console.error('Garbage ID or selected date is missing');
    }
  };

  const handleConfirmDate = (date: Date) => {
    const isoString = date.toISOString();
    setSelectedDate(isoString);
    closeModal();
  };

  const formatDate = (isoString: string) => {
    return isoString.split('T')[0];
  };

  return (
    <ScrollContainer>
      <TrashInfo garbageId={garbageId} /> 
      <CustomButton size="sm" color="white" label="pilih tanggal" onPress={SelectDateButtonPress} />
      <CustomButton size="sm" label="Penerimaan" onPress={handleAcceptButton} />

      <DateBox>
        {selectedDate && (
          <CustomText size="body" color="#000">
            {`tanggal yang dipilih: ${formatDate(selectedDate)}`}
          </CustomText>
        )}
      </DateBox>

      <DatePicker visible={modalVisible} onConfirm={handleConfirmDate} onCancel={closeModal} />
    </ScrollContainer>
  );
};

export default NotMatchedTrashInfoTemplate;
