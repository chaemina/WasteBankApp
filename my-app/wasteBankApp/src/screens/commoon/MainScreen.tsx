import React, { useEffect, useState } from 'react';
import MyWebView from '../../components/common/templates/MyWebView';
import { removeItem,getItem } from '../../hooks/useAsyncStorage';

const MainScreen = () => {

  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {

    const loadInitialUrl = async () => {
      try {


        const token = await getItem('auth');
        
        if (token) {
          setUrl("https://waste-bank-web-eight.vercel.app/"); 
        } else {
          setUrl("https://waste-bank-web-eight.vercel.app/login"); 
        }
      } catch (error) {
        console.error('Error loading token from AsyncStorage:', error);
        setUrl("https://waste-bank-web-eight.vercel.app/login");
      }
    };

    loadInitialUrl(); 
  }, []);

  if (!url) {

    return null;
  }

  return (
    <>
      <MyWebView initialUrl={url} />
    </>
  );
};

export default MainScreen;
