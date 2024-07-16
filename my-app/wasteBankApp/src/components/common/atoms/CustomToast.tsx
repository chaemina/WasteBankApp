import React, {useState, useEffect} from 'react';
import {View, Animated, Image} from 'react-native';
import CustomText from '../atoms/CustomText';
import {styled} from 'styled-components';

const ToastContainer = styled(Animated.View)`
  flex-direction: row;
  position: absolute;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 183, 59, 0.5);
  width: 90%;
  height: 80px;
  left: 5%;
  padding: 15px;
`;

const ToastIcon = styled(View)`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ToastText = styled(CustomText)`
  flex: 1;
  flex-wrap: wrap;
  font-size: 16px;
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
      <ToastIcon></ToastIcon>
      <ToastText>{message}</ToastText>
    </ToastContainer>
  );
};

export default CustomToast;
