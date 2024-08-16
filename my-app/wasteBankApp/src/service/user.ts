import { instance } from "./instance";

// 이메일 중복 확인
export const emailCheck = async (email:string) => {
    try {
      const response = await instance.post('/api/auth/checkEmail', { email });
      return response.data;
    } catch (error) {
      console.error('Error during API call', error);
      throw error;
    }
  };