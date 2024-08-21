import React, {useState, useEffect} from 'react';
import {View, Animated, Image} from 'react-native';
import Container from './Container';
import CustomText from '../atoms/CustomText';
import {styled} from 'styled-components';
import { scale,moderateScale } from '../../../utils/Scale';

const ToastContainer = styled(Animated.View)`
  flex-direction: row;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 183, 59, 0.5);
  width: 90%;
  height: ${moderateScale(50,0.3)}px;
  margin: ${scale(20)}px;
`;

type CustomToastProps = {
  message: string;
  visible: boolean;
};

const CustomToast: React.FC<CustomToastProps> = ({message, visible}) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      // visible이 true일 때 애니메이션 시작
      Animated.timing(opacity, {
        toValue: 1, // opacity 값을 1로 변경
        duration: 500, // 500ms 동안 애니메이션
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        // 5초 후에 다시 사라지는 애니메이션
        Animated.timing(opacity, {
          toValue: 0, // opacity 값을 0으로 변경
          duration: 500, // 500ms 동안 애니메이션
          useNativeDriver: true,
        }).start();
      }, 5000); // 5초 대기
    }
  }, [visible, opacity]);

  if (!visible) {
    return null;
  }

  return (
    <ToastContainer style={{opacity}}>
      <CustomText>{message}</CustomText>
    </ToastContainer>
  );
};

export default CustomToast;
