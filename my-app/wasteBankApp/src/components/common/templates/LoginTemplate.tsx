import React from 'react';
import { useNav } from '../../../hooks/useNav';
import MyWebView from './MyWebView';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import styled from 'styled-components/native';
import { scale } from '../../../utils/Scale';

const ScreenContainer = styled.View`
  flex: 1;
`;

const AppViewContainer = styled.View`
  position: absolute;
  bottom: ${scale(350)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${scale(10)}px;
`;

const LoginTemplate = () => {
  const navigation = useNav();

  return (
    <>
      {/* 웹뷰 */}
      <MyWebView initialUrl='http://localhost:5173/login/'>
        {/* 앱인 경우만 출력 */}
        <AppViewContainer>
          <CustomText bold color="#4C4C4C" size="caption">계정이 없으신가요?</CustomText>
          <CustomButton       
            size='sm' 
            label='Sign Up'
            color='white'
            onPress={() => { navigation.push('RoleSelect') }}
          />
        </AppViewContainer>
      </MyWebView>
    </>
  );
};

export default LoginTemplate;
