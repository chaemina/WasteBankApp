import React, { FC, ReactNode } from "react";
import styled from 'styled-components/native';
import { scale } from "../../../utils/Scale";

export type Props = {
  children: ReactNode
}

const StyledText = styled.Text`
  font-family: 'Inter-Regular';
  font-weight: bold;
  color: #40892D;
  font-size: ${scale(30)}px;
  margin-top: ${scale(30)}px;
`;

const CustomTitle: FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomTitle;
