import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { moderateScale } from "../../../utils/Scale";
import styled from 'styled-components/native';
import CustomText from "./CustomText";

export type Props = {
  label: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: boolean;
  onPress?: (data?: any) => void;
} & TouchableOpacityProps;

const CustomButton: FC<Props> = ({ label, onPress, color, size = 'md', rounded = false, ...rest }) => {
  const getTextSize = (size: 'xs' | 'sm' | 'md' | 'lg') => {
    switch (size) {
      case 'xs':
        return 'caption';
      case 'sm':
      case 'md':
        return 'body';
      case 'lg':
        return 'title';
      default:
        return 'body';
    }
  };

  const textSize = getTextSize(size);

  return (
    <StyledButton onPress={onPress} color={color} size={size} rounded={rounded} {...rest}>
     <CustomText color={color === '#40892d' ? 'white' : (color === 'white' ? 'black' : 'white')} bold={true} size={textSize}>
        {label}
      </CustomText>
    </StyledButton>
  );
};

export default CustomButton;

const getButtonDimensions = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  const unit = 'px';
  switch (size) {
    // Modal Button
    case 'xs':
      return {
        width: `${moderateScale(56, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`
      };
    // Normal Button
    case 'sm':
      return {
        width: `${moderateScale(258, 0.3)}${unit}`,
        height: `${moderateScale(40, 0.3)}${unit}`
      };
    // Home List Button
    case 'md':
      return {
        width: `${moderateScale(154, 0.3)}${unit}`,
        height: `${moderateScale(154, 0.3)}${unit}`
      };
    // Using in SignUp
    case 'lg':
      return {
        width: `${moderateScale(250, 0.3)}${unit}`,
        height: `${moderateScale(100, 0.3)}${unit}`
      };
    default:
      return {
        width: `${moderateScale(154, 0.3)}${unit}`,
        height: `${moderateScale(154, 0.3)}${unit}`
      };
  }
};

const StyledButton = styled(TouchableOpacity)<{ color?: string; size: 'xs' | 'sm' | 'md' | 'lg'; rounded: boolean }>`
  ${({ size }) => {
    const { width, height } = getButtonDimensions(size);
    return `
      width: ${width};
      height: ${height};
    `;
  }}
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : '#40892d')};
  border : 2px #40892d;
  border-radius: ${({ rounded }) => (rounded ? '25px' : '12px')};
`;
