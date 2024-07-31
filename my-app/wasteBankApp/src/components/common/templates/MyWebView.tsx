import React, { useRef, useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

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
  const navigation = useNavigation();
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

  return (
    <Wrapper>
      <StyledWebView
        ref={webviewRef}
        source={{ uri: initialUrl as string }}
        onNavigationStateChange={handleNavigationStateChange}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
      {children}
    </Wrapper>
  );
};

export default MyWebView;
