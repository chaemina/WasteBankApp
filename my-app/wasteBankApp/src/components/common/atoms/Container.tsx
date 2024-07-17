import React, { ReactNode } from 'react';
import { View, SafeAreaView, ViewStyle } from 'react-native';
import { width, height } from '../../../utils/Scale';
import { scale } from '../../../utils/Scale';

type ContainerProps = {
  children: ReactNode;
};

// FlatList, SectionList와 ScrollView 동시 사용시 오류

// 기본 : Scroll View 사용
// 렌더링 할 리스트 있는 경우 상위 컴포넌트 : Container 사용 
const Container: React.FC<ContainerProps> = ({ children }) => {
  const customStyle: ViewStyle = {
    width: width,
    height: height,
    alignItems: 'center',
    padding: scale(20),
  };

  return (
    <SafeAreaView>
      <View style={customStyle}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
