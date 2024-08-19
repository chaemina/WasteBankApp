import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { TouchableOpacity, BackHandler } from 'react-native';
import { setItem,removeItem } from '../../../hooks/useAsyncStorage';
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
            navigation.navigate(parsedMessage.destination);
          }
          break;

        default:
          console.warn('Unknown message type received:', parsedMessage.type);
      }
    } catch (error) {
      console.error('Failed to process message:', error);
    }
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
