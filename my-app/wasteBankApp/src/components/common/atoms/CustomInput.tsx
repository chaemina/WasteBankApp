import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps, ViewStyle } from 'react-native';
import CustomText from './CustomText';
import { moderateScale, scale } from '../../../utils/Scale';
import { Controller } from 'react-hook-form';

type CustomInputProps = {
  placeholder?: string;
  width?: number;
  style?: ViewStyle;
  autoFocus?: boolean;
  name: string;
  control: any;
  defaultValue?: string;
  secureTextEntry?: boolean; 
  keyboardType?: TextInputProps['keyboardType'];
  label?: string;
  labelColor?: string;
  inputColor?: string;
  rules?: object; // rules 속성 추가
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
  border-color: ${({ inputColor }) => (inputColor === '#40892d' ? 'white' : '#4C4C4C')};
  background-color: ${({ inputColor }) => inputColor};
`;

const ErrorText = styled(CustomText)`
  color: red;
  margin-top: ${scale(5)}px;
`;

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  width = 250,
  style,
  autoFocus,
  name,
  control,
  defaultValue = '',
  secureTextEntry = false,
  keyboardType,
  label,
  labelColor = '#000',
  inputColor = '#fff',
  rules,
}) => {
  return (
    <Container>
      {label && <CustomText color={labelColor}>{label}</CustomText>}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <StyledInput
              style={style}
              inputWidth={width}
              inputColor={inputColor}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry} 
            />
            {error && <CustomText size='caption' color='red'>{`${error.message}`}</CustomText>}
          </>
        )}
      />
    </Container>
  );
};

export default CustomInput;
