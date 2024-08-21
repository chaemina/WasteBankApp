import React from 'react';
import { View } from 'react-native';
import CustomInput from '../atoms/CustomInput';
import CustomButton from '../atoms/CustomButton';
import CustomText from '../atoms/CustomText';
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from 'react-native-country-picker-modal';
import { useFormContext, useWatch } from 'react-hook-form';
import { emailCheck } from '../../../service/user';
import LocationSearch from './LocationSearch';
import useEmailVerification from '../../../hooks/useEmailVerification';

type InputBoxProps = {
  inputs: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: React.ComponentProps<typeof CustomInput>['keyboardType'];
    label?: string;
    name: string;
    rules?: object; // 유효성 검사 규칙 추가
  }>;
};

const InputBox: React.FC<InputBoxProps> = ({ inputs }) => {
  const { control } = useFormContext(); 
  const [countryCode, setCountryCode] = React.useState<CountryCode>('ID');
  const [callingCode, setCallingCode] = React.useState('+62');
  const [emailVerified, setEmailVerified] = React.useState<boolean>(false); // 상태 추가

  const email = useWatch({
    control,
    name: 'email', 
    defaultValue: '',  
  });

  React.useEffect(() => {
    console.log('Watched email:', email); 
  }, [email]);

  const onSubmit = async () => {
    try {
      console.log('Email before submit:', email); 
      const response = await emailCheck(email);
      if (response.response === "email available") {
        console.log('Email is available:', email);
        setEmailVerified(true); // 이메일 인증 성공 시 상태 업데이트
      } else {
        console.error('Request failed:', response.error);
        setEmailVerified(false); // 실패 시 상태 초기화
      }
    } catch (error) {
      console.error('Error during Request:', error);
      setEmailVerified(false); // 오류 시 상태 초기화
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
                name={input.name} 
                control={control}
                defaultValue={input.defaultValue}
                keyboardType={input.keyboardType}
                label={input.label}
              />
              <CustomButton size="sm" label="Periksa duplikat" onPress={onSubmit} />
              {emailVerified && <CustomText>이메일 인증 성공</CustomText>} 
            </View>
          ) : input.label === 'Phone Number' ? (
            <View style={{ alignItems: 'center' }}>
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
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withCountryNameButton={true}
                withCallingCode
                onSelect={onSelect}
              />
            </View>
          ) 
          : input.label === 'Address' ? (
            <View style={{ alignItems: 'center' }}>
              <LocationSearch />
            </View>
          )
          : (
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
