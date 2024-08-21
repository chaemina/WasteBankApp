import React from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import ScrollContainer from '../atoms/ScrollContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/RootReducer';
import { sendEmail,sendWhatsAPP } from '../../../service/user';

const AuthenticationSelectTemplate = () => {
  const navigation = useNav();
  const { email } = useSelector((state: RootState) => state.templateUser);
  const role = useSelector((state: RootState) => state.templateRole.role);

  const handleSendCodeToEmail = async () => {

    const output = {
      email: email,
      role: role,
      code : null,
    };


    try {
      // 이메일 인증 코드 보내기
      const response = await sendEmail(output);
      console.log('Send Code Response:', response);
  
      // 인증 요청 성공 시 인증 코드 입력 화면 이동 
      navigation.push('Authentication', { method: 'Email' }) 
    } catch (error) {
      console.error('Send Code failed:', error);
    }
    
    navigation.push('Authentication', { method: 'Email' }) 
    console.log(output); 
    
  }


  const handleSendCodeToWhatsApp = async () => {

    const output = {
      email: email,
      role: role,
      code : null,
    };

    try {
      // 왓츠앱 인증 코드 보내기
      const response = await sendWhatsAPP(output);
      console.log('Send Code Response:', response);
  
      // 인증 요청 성공 시 인증 코드 입력 화면 이동 
      navigation.push('Authentication', { method: 'WHATSAPP' }) 
    } catch (error) {
      console.error('Send Code failed:', error);
    }
    
    navigation.push('Authentication', { method: 'WHATSAPP' }) 
    console.log(output); 
    
  }

  return (
    <ScrollContainer>
        <CustomTitle >VERIFIKASI AKUN MENGGUNAKAN</CustomTitle>
        <CustomButton
        size='lg'
        label='EMAIL'
        onPress={handleSendCodeToEmail}
      />
      <CustomButton
        size='lg'
        label='WHATSAPP'
        onPress={handleSendCodeToWhatsApp}
      />
    </ScrollContainer>
  );
};

export default AuthenticationSelectTemplate;