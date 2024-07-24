import React, { ReactNode } from 'react';
import { View, SafeAreaView, ScrollView, ViewStyle } from 'react-native';
import { scale, width, height } from '../../../utils/Scale';

type ScrollContainerProps = {
  children: ReactNode;
};

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  // 태블릿 판별 기준 설정 (너비 기준)
  const isTablet = width >= 300; // 300dp를 기준으로 태블릿 판별

  const customStyle: ViewStyle = {
    width: width,
    height: `100%`,
    alignItems: 'center',
    padding: scale(10),
  };

  // 디바이스가 태블릿인 경우 ScrollView 사용, 그렇지 않으면 View 사용
  const ScrollViewComponent: React.ElementType = isTablet ? ScrollView : View;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollViewComponent contentContainerStyle={isTablet ? { flexGrow: 1 } : undefined} style={{ flex: 1 }}>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={customStyle}>
            {children}
          </View>
        </View>
      </ScrollViewComponent>
    </SafeAreaView>
  );
};

export default ScrollContainer;
