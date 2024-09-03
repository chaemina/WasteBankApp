import React from 'react';
import {useNav} from '../../../hooks/useNav';
import MyWebView from './MyWebView';

const LoginTemplate = () => {
  const navigation = useNav();

  return (
    <>
      {/* 웹뷰 */}
      <MyWebView initialUrl='https://waste-bank-web-eight.vercel.app/'>
      </MyWebView>
    </>
  );
};

export default LoginTemplate;
