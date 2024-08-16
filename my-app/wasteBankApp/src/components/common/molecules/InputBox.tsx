import React, { useState } from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import CustomInput from '../atoms/CustomInput';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from 'react-native-country-picker-modal';

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
  const [countryCode, setCountryCode] = useState<CountryCode>('KR'); // 기본적으로 한국의 국가 코드 설정
  const [callingCode, setCallingCode] = useState('+82'); // 기본적으로 한국의 국가 번호 설정

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
  };

  return (
    <>
      {inputs.map((input, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          {input.label === 'Phone Number' ? (
            <View style={{ alignItems: 'center' }}>
              <CustomInput
                placeholder={input.placeholder}
                width={input.width}
                autoFocus={input.autoFocus}
                defaultValue={callingCode} 
                keyboardType={input.keyboardType}
                label={input.label}
              />
               <CountryPicker
                countryCode={countryCode}
                withFilter
                withCountryNameButton={true}
                withCallingCode
                onSelect={onSelect}
              />
            </View>
          ) : (
            <CustomInput
              placeholder={input.placeholder}
              width={input.width} // 지정된 너비 사용
              autoFocus={input.autoFocus}
              defaultValue={input.defaultValue}
              keyboardType={input.keyboardType}
              label={input.label}
            />
          )}
        </View>
      ))}
    </>
  );
};

export default InputBox;
