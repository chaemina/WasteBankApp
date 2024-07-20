import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNav } from '../../hooks/useNav';
import MyWebView from '../../components/common/templates/MyWebView';
import CustomButton from '../../components/common/atoms/CustomButton';
import styled from 'styled-components/native';

const LoginScreen = () => {
  const navigation = useNav();

  return (
    <ScreenContainer>
      {/* 웹뷰 */}
      <MyWebView>
        {/* 앱인 경우만 출력 */}
        <ButtonContainer>
          <CustomButton       
            size='md' 
            label='button'
            onPress={() => { navigation.push('Home') }}
          >
            버튼
          </CustomButton>
        </ButtonContainer>
      </MyWebView>
    </ScreenContainer>
  );
};

export default LoginScreen;

const ScreenContainer = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
