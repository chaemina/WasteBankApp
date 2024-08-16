import React from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import CustomInput from '../atoms/CustomInput';
import CustomButton from '../atoms/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from 'react-native-country-picker-modal';
import { useFormContext, useWatch } from 'react-hook-form';
import { emailCheck } from '../../../service/user';

type InputBoxProps = {
  inputs: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: KeyboardTypeOptions;
    label?: string;
    name: string;
  }>;
};

const InputBox: React.FC<InputBoxProps> = ({ inputs }) => {
  const { control } = useFormContext(); 
  const [countryCode, setCountryCode] = React.useState<CountryCode>('KR');
  const [callingCode, setCallingCode] = React.useState('+82');
  
  // 기본값 설정 및 useWatch로 값 감시
  const email = useWatch({
    control,
    name: 'userEmail', 
    defaultValue: '',  // 기본값을 빈 문자열로 설정
  });

  React.useEffect(() => {
    console.log('Watched email:', email); // email 값 확인
  }, [email]);

  const onSubmit = async () => {
    try {
      console.log('Email before submit:', email); // onSubmit 시점의 email 값 확인
      const response = await emailCheck(email);
      if (response.response === "email available") {
        console.log('Email is available:', email);
      } else {
        console.error('Request failed:', response.error);
      }
    } catch (error) {
      console.error('Error during Request:', error);
    }
  };

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
  };

  return (
    <>
      {inputs.map((input, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          {input.label === 'Email' ? (
            <View style={{ alignItems: 'center' }}>
              <CustomInput
                placeholder={input.placeholder}
                width={input.width}
                autoFocus={input.autoFocus}
                name={input.name} // 여기서 'userEmail'이 전달되어야 함
                control={control}
                defaultValue={input.defaultValue}
                keyboardType={input.keyboardType}
                label={input.label}
              />
              <CustomButton size="sm" label="Check for Duplicates" onPress={onSubmit} />
            </View>
          ) : input.label === 'Phone Number' ? (
            <View style={{ alignItems: 'center' }}>
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withCountryNameButton={true}
                withCallingCode
                onSelect={onSelect}
              />
              <CustomInput
                placeholder={input.placeholder}
                width={input.width}
                autoFocus={input.autoFocus}
                name={input.name}
                control={control}
                defaultValue={callingCode}
                keyboardType={input.keyboardType}
                label={input.label}
              />
            </View>
          ) : (
            <CustomInput
              placeholder={input.placeholder}
              width={input.width}
              autoFocus={input.autoFocus}
              name={input.name}
              control={control}
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
