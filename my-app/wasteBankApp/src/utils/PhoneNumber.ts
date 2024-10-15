import React from 'react';
import { CountryCode, Country } from 'react-native-country-picker-modal';

const usePhoneNumberPicker = () => {
  const [countryCode, setCountryCode] = React.useState<CountryCode>('ID');
  const [callingCode, setCallingCode] = React.useState('+62');

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
  };

  return { countryCode, callingCode, onSelect };
};

export default usePhoneNumberPicker;
