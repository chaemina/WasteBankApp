import React from 'react';
import Container from '../atoms/Container';
import CustomInput from '../atoms/CustomInput';
import { KeyboardTypeOptions } from 'react-native';

type InputBoxProps = {
  inputs: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: KeyboardTypeOptions;
    label?: string;
  }>;
};


const InputBox: React.FC<InputBoxProps> = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <CustomInput
          key={index}
          placeholder={input.placeholder}
          width={input.width}
          autoFocus={input.autoFocus}
          defaultValue={input.defaultValue}
          keyboardType={input.keyboardType}
          label={input.label}
        />
      ))}
    </>
  );
};

export default InputBox;
