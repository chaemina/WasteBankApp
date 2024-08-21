import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { TouchableOpacity, BackHandler } from 'react-native';
import { setItem,removeItem } from '../../../hooks/useAsyncStorage';
import { useNav } from '../../../hooks/useNav';
import CustomToast from '../atoms/CustomToast';

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
  const [toastVisible, setToastVisible] = useState(false); 

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); // 토스트를 5.5초 동안 표시
  };

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
                // garbageId가 포함된 경우와 아닌 경우를 처리
                if (parsedMessage.garbageId) {
                  // garbageId가 있는 경우
                  navigation.navigate(parsedMessage.destination, { garbageId: parsedMessage.garbageId });
                } else {
                  // garbageId가 없는 경우
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
    <CustomToast message="오류가 발생했습니다. 다시 시도하세요." visible={toastVisible} />
    </>
  );
};

export default MyWebView;
