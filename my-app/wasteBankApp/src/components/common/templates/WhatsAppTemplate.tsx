import React from 'react';
import styled from 'styled-components/native';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import ScrollContainer from '../atoms/ScrollContainer';
import { scale } from '../../../utils/Scale';


const InputContainer = styled.View`
  width: 100%;
  padding: ${scale(0)} ${scale(20)}px;
  align-items: center;
  margin-top: ${scale(20)}px;
  background-color: #40892d; 
  border-radius: 10px;
  padding-bottom: ${scale(20)}px; 
`;


const WhatsAppTemplate = () => {
  const navigation = useNav();

  return (
    <ScrollContainer>
      <CustomTitle>VERIFIKASI AKUN</CustomTitle>

      <CustomText size='caption' color='#4C4C4C'>Kami sudah mengirimkan kode ke whatsapp anda</CustomText>
      <InputContainer>
        <CustomInput label="kode" labelColor="white" inputColor="#40892d" keyboardType='numeric' />
        <CustomButton size="sm" color="white" label="VERIFIKASI"/>
      </InputContainer>
    </ScrollContainer>
  );
};

export default WhatsAppTemplate;
