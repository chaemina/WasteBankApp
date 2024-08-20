import axios from 'axios';
import { getItem, setItem } from '../hooks/useAsyncStorage';

export const instance = axios.create({
  baseURL: 'http://ec2-43-202-58-157.ap-northeast-2.compute.amazonaws.com:8090',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  async config => {
    console.log('[API REQUEST]', config);

    const token = await getItem('auth');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.log('요청에 토큰이 담기지 않았습니다.');
    }

    return config;
  },
  error => {
    console.log(`[API REQUEST ERROR] ${error}`);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async response => {
    console.log('[API RESPONSE]', response);
    
    const token = response.headers['authorization'];
    if (token) {
      await setItem('auth', token); 
    }
    
    return response;
  },
  error => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    return Promise.reject(error);
  },
);