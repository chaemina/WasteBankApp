import React, { FC } from "react";
import { Text } from "react-native";
import styled from 'styled-components/native';
import { scale } from "../../../utils/Scale";

export type Props = {
  children: string;
  bold?: boolean;
  color?: string;
  size?: 'title' | 'body' | 'caption';
} 

const getFontSize = (size: 'title' | 'body' | 'caption' | undefined): number => {
  switch (size) {
    case 'title':
      return scale(10);  // scale 함수를 사용하여 크기를 조정합니다.
    case 'body':
      return scale(8);  // scale 함수를 사용하여 크기를 조정합니다.
    case 'caption':
      return scale(5);  // scale 함수를 사용하여 크기를 조정합니다.
    default:
      return scale(8);  // 기본 크기를 scale 함수를 사용하여 조정합니다.
  }
};

const CustomText: FC<Props> = ({ children, bold, color, size, ...rest }) => {
  const fontSize = getFontSize(size);

  return (
    <StyledText bold={bold} color={color} fontSize={fontSize} {...rest}>
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

// Using Custom Text

{/* <CustomText size="title" bold color="red">This is a title</CustomText>
<CustomText size="body">This is body text</CustomText>
<CustomText size="caption" color="gray">This is a caption</CustomText> */}
