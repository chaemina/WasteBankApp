import React, { useRef, useState, ReactNode } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import CustomText from '../atoms/CustomText';
import { width, height } from '../../../utils/Scale';

interface MyWebViewProps {
  children?: ReactNode;
  url?: string;
}

const Wrapper = styled.View`
  flex: 1;
`;

const StyledWebView = styled(WebView)`
  flex: 1;
  width: ${width}px;
  height: ${height}px;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const MyWebView: React.FC<MyWebViewProps> = ({ children, url }) => {
  const webviewRef = useRef<WebView>(null);
  const [navState, setNavState] = useState<any>(null);

  return (
    <Wrapper>
      {url ? (
        <StyledWebView
          ref={webviewRef}
          source={{ uri: url as string }} 
          onNavigationStateChange={e => setNavState(e)}
        />
      ) : (
        <Overlay>
          <CustomText>URL이 제공되지 않았습니다.</CustomText>
        </Overlay>
      )}
      {children && <Overlay>{children}</Overlay>}
    </Wrapper>
  );
};

export default MyWebView;
