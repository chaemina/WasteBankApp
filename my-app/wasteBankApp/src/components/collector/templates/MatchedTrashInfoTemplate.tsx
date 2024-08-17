import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomButton from '../../common/atoms/CustomButton';
import { useNav } from '../../../hooks/useNav';
import TrashInfo from './TrashInfo';


const MatchedTrashInfoTemplate = () => {

  const navigation = useNav();

  const handleOnPress = () => {
    navigation.push("IndividualTrashMapView")
  }

  return (
    <ScrollContainer>
      <TrashInfo/>
      {/* 이때 쓰레기 ID 담아서 요청 보내기 */}
      <CustomButton size="sm" label='Awal' onPress={handleOnPress} /> 
    </ScrollContainer>
  );
};

export default MatchedTrashInfoTemplate;
