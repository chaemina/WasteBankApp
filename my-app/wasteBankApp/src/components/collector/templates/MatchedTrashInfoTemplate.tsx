import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomButton from '../../common/atoms/CustomButton';
import styled from 'styled-components/native';
import TrashInfo from './TrashInfo';


const MatchedTrashInfoTemplate = () => {

  return (
    <ScrollContainer>
      <TrashInfo/>
      <CustomButton size="sm" label='Awal' /> 
    </ScrollContainer>
  );
};

export default MatchedTrashInfoTemplate;
