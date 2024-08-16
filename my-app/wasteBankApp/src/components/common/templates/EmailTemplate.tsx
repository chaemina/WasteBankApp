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
import { signupUser } from '../../../service/user';

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
  const { email, phone, name, password, location, account, bank } = useSelector((state: RootState) => state.templateUser);
  const role = useSelector((state: RootState) => state.templateRole.role);

  const handleGoLogin = async () => {

    // 1. 코드 인증 
    const code = methods.getValues('code');

    const output = {
      tempKey: email,
      role: role,
      code: code,
    };

    console.log(output); 

    // 2. 코드 인증 성공 시 회원 가입 요청 
    const signupData = {
      email,
      phone,
      name,
      password,
      location,
      account,
      bank
    };


    try {
      // 회원 가입 요청
      const response = await signupUser(signupData);
      console.log('Signup Response:', response);
  
      // 회원 가입 성공 시 로그인 페이지로 이동
      navigation.push("Login");
    } catch (error) {
      console.error('Signup failed:', error);
    }
    
    // 3. 회원 가입 요청 성공 시 로그인 화면 이동 
  //  navigation.push("Login");
  };

  return (
    <FormProvider {...methods}>
      <ScrollContainer>
        <CustomTitle>VERIFIKASI AKUN</CustomTitle>

        <CustomText size='caption' color='#4C4C4C'>
          Kami sudah mengirimkan kode ke email anda
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
