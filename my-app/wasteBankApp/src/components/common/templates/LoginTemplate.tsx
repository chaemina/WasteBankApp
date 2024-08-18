import React from 'react';
import {useNav} from '../../../hooks/useNav';
import MyWebView from './MyWebView';

const LoginTemplate = () => {
  const navigation = useNav();

  return (
    <>
      {/* 웹뷰 */}
      <MyWebView initialUrl='http://localhost:5173/Login'>
      </MyWebView>
    </>
  );
};

export default LoginTemplate;
