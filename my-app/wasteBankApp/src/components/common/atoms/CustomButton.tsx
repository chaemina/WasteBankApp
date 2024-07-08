import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps,Text } from "react-native";
import styled from 'styled-components';
import CustomText from "./CustomText";


export type Props = {
  label: string;
  color?: string;
  onPress?: (data?: any) => void;
} & TouchableOpacityProps;

const CustomButton: FC<Props> = ({ label, onPress, color, ...rest }) => {
  return (
    <StyledButton label="" onPress={onPress} color={color} {...rest}>
        <CustomText>This is origin text</CustomText>
        <CustomText bold={true}>This is bold text</CustomText>
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled(TouchableOpacity)<Props>`
  width: 50%;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ color }) =>
    color ? color : 'green'};
`;

