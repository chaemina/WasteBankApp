import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, BackHandler } from 'react-native';
import { useNav } from '../../../hooks/useNav';

interface MyWebViewProps {
  initialUrl: string;
  children?: React.ReactNode;
}

const Wrapper = styled.View`
  flex: 1;
`;

const StyledWebView = styled(WebView)`
  flex: 1;
`;

const BackButton = styled.Text`
  font-size: 25px;
  color: #000;
  padding-left: 10px;
`;

const MyWebView: React.FC<MyWebViewProps> = ({ initialUrl, children }) => {
  const webviewRef = useRef<WebView>(null);
  const navigation = useNav();
  const [canGoBack, setCanGoBack] = useState(false);

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
    if (navState.url !== initialUrl) {
      navigation.setOptions({ headerShown: true });
    } else {
      navigation.setOptions({ headerShown: false });
    }
  };

  const goBack = () => {
    if (webviewRef.current && canGoBack) {
      webviewRef.current.goBack();
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goBack}>
          <BackButton>{'<'}</BackButton>
        </TouchableOpacity>
      ),
    });
  }, [navigation, canGoBack]);

  const backPress = useCallback(() => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  }, []);

  // 애니메이션 효과나 다른 방법 생각 필요 
  useEffect(() => {
     BackHandler.addEventListener('hardwareBackPress', backPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress);
    };
  }, [backPress]);

  const handleMessage = (event: any) => {
    const message = event.nativeEvent.data;
    console.log("Received message:", message); // 콘솔 로그 출력
    navigation.push(message);  // 이동하지 않는 경우도 생각해봐야함, navigate라는 문자열 포함 혹은 token 문자열 포함 여부.. 등등
  };

  return (
    <Wrapper>
      <StyledWebView
        ref={webviewRef}
        source={{ uri: initialUrl as string }}
        onNavigationStateChange={handleNavigationStateChange}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={handleMessage} // 메시지 수신 핸들러
      />
      {children}
    </Wrapper>
  );
};

export default MyWebView;
