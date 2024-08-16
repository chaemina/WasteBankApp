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
  const email = useSelector((state: RootState) => state.templateUser.email);
  const role = useSelector((state: RootState) => state.templateRole.role);

  const handleGoLogin = () => {
    const code = methods.getValues('code'); // 입력된 코드 값을 가져옴

    const output = {
      email: email,
      role: role,
      code: code,
    };

    console.log(output); // 객체로 출력
  //  navigation.push("Login");
  };

  return (
    <FormProvider {...methods}>
      <ScrollContainer>
        <CustomTitle>VERIFIKASI AKUN</CustomTitle>

        <CustomText size='caption' color='#4C4C4C'>
          Kami sudah mengirimkan kode ke whatsapp anda
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
