import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomButton from '../../common/atoms/CustomButton';
import CustomText from '../../common/atoms/CustomText';
import styled from 'styled-components/native';
import DatePicker from '../../common/atoms/DatePicker';
import useModal from '../../../hooks/useModal';
import TrashInfo from './TrashInfo';


const DateBox = styled.View`
  width: 90%;
  margin-top: 20px;
  align-items: center;
`;

const NotMatchedTrashInfoTemplate = () => {
  const { modalVisible, openModal, closeModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);


  const handleButtonPress = () => {
    openModal();
  };

  const handleConfirmDate = (date: Date) => {
    const isoString = date.toISOString();
    setSelectedDate(isoString);
    console.log('Selected date:', isoString);
    closeModal();
  };

  const formatDate = (isoString: string) => {
    return isoString.split('T')[0];
  };

  return (
    <ScrollContainer>
      <TrashInfo/>
      <CustomButton size="sm" color='white' label='Select Date' onPress={handleButtonPress} />
      <CustomButton size="sm" label='Penerimaan' /> 
      
      <DateBox>
        {selectedDate && (
          <CustomText size='body' color='#000'>
           {`Selected Date: ${formatDate(selectedDate)}`} 
          </CustomText>
        )}
      </DateBox>

      <DatePicker visible={modalVisible} onConfirm={handleConfirmDate} onCancel={closeModal} />
    </ScrollContainer>
  );
};

export default NotMatchedTrashInfoTemplate;
