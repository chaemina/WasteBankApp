import React, { useState } from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import ScrollContainer from '../atoms/ScrollContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/RootReducer';
import { sendEmail, sendWhatsAPP } from '../../../service/user';
import Loading from '../atoms/Loading';
import CustomToast from '../atoms/CustomToast';

const AuthenticationSelectTemplate = () => {
  const navigation = useNav();
  const { email } = useSelector((state: RootState) => state.templateUser);
  const role = useSelector((state: RootState) => state.templateRole.role);
  const [isLoading, setIsLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };

  const handleSendCodeToEmail = async () => {
    const output = {
      email: email,
      role: role,
      code: null,
    };

    try {
      setIsLoading(true);
      // 이메일 인증 코드 보내기
      const response = await sendEmail(output);
      console.log('Send Code Response:', response);

      // 인증 요청 성공 시 인증 코드 입력 화면 이동
      navigation.push('Authentication', { method: 'Email' });
    } catch (error) {
      console.error('Send Code failed:', error);
      showToast(); // 에러 발생 시 토스트 표시
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendCodeToWhatsApp = async () => {
    const output = {
      email: email,
      role: role,
      code: null,
    };

    try {
      setIsLoading(true);
      // 왓츠앱 인증 코드 보내기
      const response = await sendWhatsAPP(output);
      console.log('Send Code Response:', response);

      // 인증 요청 성공 시 인증 코드 입력 화면 이동
      navigation.push('Authentication', { method: 'WHATSAPP' });
    } catch (error) {
      console.error('Send Code failed:', error);
      showToast(); // 에러 발생 시 토스트 표시
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading width={100} height={100} loop={true} />
      ) : (
        <ScrollContainer>
          <CustomTitle>VERIFIKASI AKUN MENGGUNAKAN</CustomTitle>
          <CustomButton
            size="lg"
            label="EMAIL"
            onPress={handleSendCodeToEmail}
          />
          <CustomButton
            size="lg"
            label="WHATSAPP"
            onPress={handleSendCodeToWhatsApp}
          />
        </ScrollContainer>
      )}
      <CustomToast message="Pengiriman telah gagal." visible={toastVisible} />
    </>
  );
};

export default AuthenticationSelectTemplate;
