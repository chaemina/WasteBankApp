import React from 'react';
import styled from 'styled-components/native';
import { useForm, FormProvider } from 'react-hook-form';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import ScrollContainer from '../atoms/ScrollContainer';
import { scale } from '../../../utils/Scale';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/RootReducer';
import { verifyWhatsAPP } from '../../../service/user';

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
  const methods = useForm();
  const navigation = useNav();
  const {email} = useSelector((state: RootState) => state.templateUser);
  const role = useSelector((state: RootState) => state.templateRole.role);

  const handleGoLogin = async () => {

    // 코드 요청 데이터 
    const code = methods.getValues('code');

    const output = {
      email: email,
      role: role,
      code: code,
    };
      
    console.log(output); 


    try {
      // 코드 인증 요청 
      const response = await verifyWhatsAPP(output);
      console.log('verifyWhatsAPP Response:', response);
      navigation.push("Login");

    } catch (error) {
      console.error('verifyWhatsAPP failed:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <ScrollContainer>
        <CustomTitle>VERIFIKASI AKUN</CustomTitle>

        <CustomText size='caption' color='#4C4C4C'>
          Kami sudah mengirimkan kode ke WHATSAPP anda
        </CustomText>
        <InputContainer>
          <CustomInput 
            name="code"  
            control={methods.control}
            label="kode" 
            labelColor="white" 
            inputColor="#40892d" 
            keyboardType='numeric' 
          />
          <CustomButton size="sm" color="white" label="인증하기" onPress={handleGoLogin}/>
          <CustomButton size="sm" label="다시 보내기" onPress={handleGoLogin}/>
        </InputContainer>
      </ScrollContainer>
    </FormProvider>
  );
};

export default WhatsAppTemplate;
