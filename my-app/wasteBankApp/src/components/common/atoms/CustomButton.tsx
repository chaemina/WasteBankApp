import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
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
      case 'sm':
        return 'caption';
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
      <CustomText color="white" bold={true} size={textSize}>{label}</CustomText>
    </StyledButton>
  );
};

export default CustomButton;

const getButtonDimensions = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  switch (size) {
    // Modal Button
    case 'xs':
      return {
        width: '56px',
        height: '40px'
      };
    // Normal Button
    case 'sm':
      return {
        width: '284px',
        height: '59px'
      };
    // Home List Button
    case 'md':
      return {
        width: '154px',
        height: '154px'
      };
    // Using in SignUp
    case 'lg':
      return {
        width: '280px',
        height: '120px'
      };
    default:
      return {
        width: '154px',
        height: '154px'
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
  background-color: ${({ color }) => (color ? color : 'green')};
  border-radius: ${({ rounded }) => (rounded ? '25px' : '12px')};
`;

// Using Button Component
// <CustomButton size='xs' label="Cancel" onPress={() => navigation.navigate('Login')} />
