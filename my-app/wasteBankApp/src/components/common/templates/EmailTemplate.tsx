import React, { useState } from 'react';
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
import { verifyEmail } from '../../../service/user';
import Loading from '../atoms/Loading';
import CustomToast from '../atoms/CustomToast';

const InputContainer = styled.View`
  width: 100%;
  padding: ${scale(0)} ${scale(20)}px;
  align-items: center;
  margin-top: ${scale(20)}px;
  background-color: #40892d; 
  border-radius: 10px;
  padding-bottom: ${scale(20)}px; 
`;

const EmailTemplate = () => {
  const methods = useForm();
  const navigation = useNav();
  const {email} = useSelector((state: RootState) => state.templateUser);
  const role = useSelector((state: RootState) => state.templateRole.role);
  const [isLoading, setIsLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };


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
      setIsLoading(true);
      // 코드 인증 요청 
      const response = await verifyEmail(output);
      console.log('verifyEmail Response:', response);
      navigation.push("Login");

    } catch (error) {
      console.error('verifyEmail failed:', error);
      showToast(); 
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    {isLoading ? (
      <Loading width={100} height={100} loop={true} />
    ) : (
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
          <CustomButton size="sm" color="white" label="VERIFIKASI" onPress={handleGoLogin}/>
          
        </InputContainer>
          <CustomText size='caption' color='#4C4C4C'>
              Belum menerima kode?
          </CustomText>
          <CustomButton size="sm" label="KIRIM ULANG" onPress={handleGoLogin}/>

      </ScrollContainer>
    </FormProvider>
    )}
     <CustomToast message="인증에 실패했습니다." visible={toastVisible} />
    </>
  );
};

export default EmailTemplate;
