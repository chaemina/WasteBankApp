import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInputProps, ViewStyle } from 'react-native';
import CustomText from './CustomText';
import { moderateScale, scale } from '../../../utils/Scale';

type CustomInputProps = {
  placeholder?: string;
  width?: number;
  style?: ViewStyle;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: TextInputProps['keyboardType'];
  label?: string;
};

const Container = styled.View`
  margin: ${scale(10)}px;
`;

const StyledInput = styled.TextInput<{ inputWidth: number }>`
  height: ${moderateScale(48, 0.3)}px;
  width: ${({ inputWidth }) => moderateScale(inputWidth, 0.3)}px;
  border-width: 2px;
  padding: ${scale(10)}px;
  border-radius: 8px;
  border-color: #000000;
  background-color: #fff;
`;

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  width = 250,
  style,
  autoFocus,
  defaultValue,
  keyboardType,
  label,
}) => {
  const [value, setValue] = useState(defaultValue || '');

  return (
    <Container>
      {label && <CustomText>{label}</CustomText>}
      <StyledInput
        style={style}
        inputWidth={width}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
    </Container>
  );
};

export default CustomInput;
