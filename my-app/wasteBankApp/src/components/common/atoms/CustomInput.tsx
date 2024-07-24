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
  labelColor?: string;
  inputColor?: string; 
};

const Container = styled.View`
  margin: ${scale(10)}px;
`;

const StyledInput = styled.TextInput<{ inputWidth: number; inputColor: string }>`
  height: ${moderateScale(48, 0.3)}px;
  width: ${({ inputWidth }) => moderateScale(inputWidth, 0.3)}px;
  border-width: 2px;
  padding: ${scale(10)}px;
  border-radius: 8px;
  border-color: ${({ inputColor }) => inputColor === '#40892d' ? 'white' : '#4C4C4C'};
  background-color: ${({ inputColor }) => inputColor};
`;

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  width = 250,
  style,
  autoFocus,
  defaultValue,
  keyboardType,
  label,
  labelColor = '#000', 
  inputColor = '#fff', 
}) => {
  const [value, setValue] = useState(defaultValue || '');

  return (
    <Container>
      {label && <CustomText color={labelColor}>{label}</CustomText>}
      <StyledInput
        style={style}
        inputWidth={width}
        inputColor={inputColor}
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
