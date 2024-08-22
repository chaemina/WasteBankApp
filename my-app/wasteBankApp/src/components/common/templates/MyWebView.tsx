import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { TouchableOpacity, BackHandler, View } from 'react-native';
import { setItem, removeItem } from '../../../hooks/useAsyncStorage';
import { useNav } from '../../../hooks/useNav';
import CustomToast from '../atoms/CustomToast';
import ArrowBackButton from '../atoms/ArrowBackButton';

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

const MyWebView: React.FC<MyWebViewProps> = ({ initialUrl, children }) => {
  const webviewRef = useRef<WebView>(null);
  const navigation = useNav();
  const [canGoBack, setCanGoBack] = useState(false);
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);

    // 현재 URL이 루트 경로 또는 로그인 페이지인지 확인
    const isRootOrLoginUrl = 
      navState.url === initialUrl || 
      navState.url === `${initialUrl}/` || 
      navState.url.includes('login');
    
    // 루트 경로나 로그인 페이지라면 헤더를 숨기고, 그렇지 않으면 헤더를 표시
    navigation.setOptions({ headerShown: !isRootOrLoginUrl });
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
      headerLeft: () => <ArrowBackButton onPress={goBack} />, 
    });
  }, [navigation, canGoBack]);

  const backPress = useCallback(() => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress);
    };
  }, [backPress]);

  const handleMessage = async (event: any) => {
    const message = event.nativeEvent.data;
    console.log("Received message:", message);

    try {
      const parsedMessage = JSON.parse(message);

      switch (parsedMessage.type) {
        case "TOKEN":
          if (parsedMessage.token) {
            await setItem('auth', parsedMessage.token);
            console.log('Token saved to AsyncStorage');
            navigation.push("Main");
          }
          break;
        
        case "REMOVE_TOKEN":
          await removeItem('auth');
          console.log('Token removed from AsyncStorage');
          
          if (webviewRef.current) {
            webviewRef.current.reload();
          }
          break;

        case "NAVIGATE":
          if (parsedMessage.destination) {
            if (parsedMessage.garbageId) {
              navigation.navigate(parsedMessage.destination, { garbageId: parsedMessage.garbageId });
            } else {
              navigation.navigate(parsedMessage.destination);
            }
          }
          break;

        default:
          console.warn('Unknown message type received:', parsedMessage.type);
      }
    } catch (error) {
      showToast(); 
      console.error('Failed to process message:', error);
    }
  };

  return (
    <>
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
      <CustomToast message="Terjadi kesalahan. Silakan coba lagi." visible={toastVisible} />
    </>
  );
};

export default MyWebView;
