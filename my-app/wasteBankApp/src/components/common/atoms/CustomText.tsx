import React, { FC } from "react";
import { Text } from "react-native";
import styled from 'styled-components';

export type Props = {
    children: string;
    bold?: boolean;
} 

const CustomText: FC<Props> = ({ children, bold, ...rest }) => {
  return (
     <StyledText bold={bold} {...rest}>{children}</StyledText>
  );
};

export default CustomText;

const StyledText = styled(Text)<{ bold?: boolean }>`
  font-family: 'Inter-Regular';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;