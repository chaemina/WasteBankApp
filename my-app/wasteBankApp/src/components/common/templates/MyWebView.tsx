import React, { useRef, useState, ReactNode } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import Container from '../atoms/Container';
import { width, height } from '../../../utils/Scale';

interface MyWebViewProps {
  children?: ReactNode;
}

const MyWebView: React.FC<MyWebViewProps> = ({ children }) => {
  const webviewRef = useRef<WebView>(null);
  const [navState, setNavState] = useState<any>(null);

  return (
    <>
      <Wrapper>
        <StyledWebView
          ref={webviewRef}
          source={{ uri: 'http://localhost:5173/' }}
          onNavigationStateChange={e => setNavState(e)}
        />
        {children && <Overlay>{children}</Overlay>}
      </Wrapper>
    </>
  );
};

export default MyWebView;

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
