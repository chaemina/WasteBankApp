import { instance } from "./instance";
import { UserState,VerifyType,SendType } from "../types/type";

// 이메일 중복 확인
export const emailCheck = async (email:string) => {
    try {
      const response = await instance.post('/api/auth/checkEmail', {email});
      return response.data;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };

// 이메일 인증 요청
export const sendEmail = async (data: SendType) => {
  try {
    const response = await instance.post('/api/auth/sendEmail', data);
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};


// 왓츠앱 인증 요청 
export const sendWhatsAPP = async (data:SendType) => {
  try {
    const response = await instance.post('/api/auth/sendWhatsapp',  data );
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};


// 이메일 인증 확인 
export const verifyEmail = async (data:VerifyType) => {
  try {
    const response = await instance.post('/api/auth/verifyEmail',  data );
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};

// 왓츠앱 인증 확인 
export const verifyWhatsAPP = async (data:VerifyType) => {
  try {
    const response = await instance.post('/api/auth/verifyWhatsapp', data );
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};


// 사용자 회원 가입 요청 
export const signupUser = async (data:UserState) => {
  try {
    const response = await instance.post('/api/auth/user',  data);
    return response.data;
  } catch (error) {
    console.error('Error during API call', error);
    throw error;
  }
};