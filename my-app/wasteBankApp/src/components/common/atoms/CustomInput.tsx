import React, { useState } from 'react';
import CustomText from './CustomText';
import { SafeAreaView, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { moderateScale, scale } from '../../../utils/Scale';

type CustomInputProps = {
  placeholder?: string;
  width?: 150 | 250;
  style?: ViewStyle;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: TextInputProps['keyboardType'];
  label?: string;
};

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

  const inputStyle = StyleSheet.flatten([
    styles.defaultInput,
    { width: moderateScale(width, 0.3) },
    style,
  ]);

  return (
    <SafeAreaView>
      {label && <CustomText>{label}</CustomText>}
      <TextInput
        style={inputStyle}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaultInput: {
    height: moderateScale(48, 0.3),
    borderWidth: 2,
    padding: scale(10),
    margin: scale(10),
    borderRadius: 8,
    borderColor: '#000000',
    backgroundColor: '#fff',
  },
});

export default CustomInput;

// Using Input Component

{/* <CustomInput
  placeholder="Enter text"
  label="Default Width (250)"
/>

<CustomInput
  placeholder="Enter text"
  label="Width 100"
  width={100}
/> */}
