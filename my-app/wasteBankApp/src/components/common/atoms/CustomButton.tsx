import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps,Text } from "react-native";
import styled from 'styled-components';


export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: any) => void;
} & TouchableOpacityProps;

const CustomButton: FC<Props> = ({ label, onPress, color, ...rest }) => {
  return (
    <StyledButton label="" onPress={onPress} color={color} {...rest}>
      <Text>{label}</Text>
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled(TouchableOpacity)<Props>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ color }) =>
    color ? color : 'red'};
`;

