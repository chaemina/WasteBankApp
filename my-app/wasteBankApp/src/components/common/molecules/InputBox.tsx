import React, { useState } from 'react';
import { View } from 'react-native';
import CustomInput from '../atoms/CustomInput';
import CustomButton from '../atoms/CustomButton';
import CustomText from '../atoms/CustomText'; // CustomText를 import
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from 'react-native-country-picker-modal';
import { useFormContext, useWatch } from 'react-hook-form';
import { emailCheck } from '../../../service/user';
import LocationSearch from './LocationSearch';
import CustomToast from '../atoms/CustomToast';

type InputBoxProps = {
  inputs: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: React.ComponentProps<typeof CustomInput>['keyboardType'];
    label?: string;
    name: string;
    secureTextEntry?: boolean;
    rules?: object; 
  }>;
  setEmailVerified: (verified: boolean) => void; 
};

const InputBox: React.FC<InputBoxProps> = ({ inputs, setEmailVerified }) => {
  const { control } = useFormContext(); 
  const [countryCode, setCountryCode] = useState<CountryCode>('ID');
  const [callingCode, setCallingCode] = useState('+62');
  const [emailVerifiedTextVisible, setEmailVerifiedTextVisible] = useState(false); 
  const [toastVisible, setToastVisible] = useState(false); 
  const [toastMessage, setToastMessage] = useState(''); 

  const showToast = (message: string) => {
    setToastMessage(message); 
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); 
  };

  const email = useWatch({
    control,
    name: 'email', 
    defaultValue: '',  
  });

  const onCheckEmail = async () => {
    try {
      const response = await emailCheck(email);
      if (response.response === "email available") {
        setEmailVerified(true); 
        setEmailVerifiedTextVisible(true); 
      } else {
        setEmailVerified(false);
        setEmailVerifiedTextVisible(false);
        showToast('Ini adalah email yang sudah digunakan.'); 
      }
    } catch (error) {
      setEmailVerified(false);
      setEmailVerifiedTextVisible(false); 
      showToast('Terjadi kesalahan saat memeriksa email.'); 
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
                rules={input.rules} 
              />
              <CustomButton size="sm" label="Periksa duplikat" onPress={onCheckEmail} />
              {emailVerifiedTextVisible && (
                <CustomText color='green' size='caption'>Email yang tersedia.</CustomText>
              )}
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
                rules={input.rules} 
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
              rules={input.rules} 
              secureTextEntry={input.secureTextEntry} 
            />
          )}
        </View>
      ))}
      <CustomToast message={toastMessage} visible={toastVisible} /> 
    </>
  );
};

export default InputBox;
