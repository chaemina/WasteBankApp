import React, { FC } from "react";
import { Text, TextStyle } from "react-native";
import styled from 'styled-components/native';
import { scale } from "../../../utils/Scale";

export type Props = {
  children: string;
  bold?: boolean;
  color?: string;
  size?: 'title' | 'body' | 'caption';
  style?: TextStyle;
} 

const getFontSize = (size: 'title' | 'body' | 'caption' | undefined): number => {
  switch (size) {
    case 'title':
      return scale(20);  
    case 'body':
      return scale(16);  
    case 'caption':
      return scale(12);  
    default:
      return scale(16);  
  }
};

const CustomText: FC<Props> = ({ children, bold, color, size, style }) => {
  const fontSize = getFontSize(size);

  return (
    <StyledText bold={bold} color={color} fontSize={fontSize} style={style}>
      {children}
    </StyledText>
  );
};

export default CustomText;

const StyledText = styled(Text)<{ bold?: boolean; color?: string; fontSize: number }>`
  font-family: 'Inter-Regular';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => fontSize}px;
`;
