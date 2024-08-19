import React from 'react';
import {useNav} from '../../../hooks/useNav';
import MyWebView from './MyWebView';

const LoginTemplate = () => {
  const navigation = useNav();

  return (
    <>
      <MyWebView initialUrl='http://localhost:5173/login'>
      </MyWebView>
    </>
  );
};

export default LoginTemplate;
