import React from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components";
import { moderateScale } from "../../../utils/Scale";
import { View } from "react-native";

const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color : #e9f8f0;
`;

interface SplashProps {
  width: number;
  height: number;
  loop?: boolean;
  onAnimationFinish?: () => void;
}

const Splash: React.FC<SplashProps> = ({ width, height, loop = true, onAnimationFinish }) => {
  return (
    <Wrapper>
      <LottieView
        style={{
          width: moderateScale(width, 0.3),
          height: moderateScale(height),
        }}
        source={require('../../../assets/Splash.json')}
        autoPlay
        loop={loop}
        onAnimationFinish={onAnimationFinish}
      />
    </Wrapper>
  );
};

export default Splash;
