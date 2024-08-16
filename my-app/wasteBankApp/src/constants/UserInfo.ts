import { KeyboardTypeOptions } from 'react-native';

export const UserinputFields: Array<{
  placeholder?: string;
  width?: number;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
}> = [
  // all string type
  // name, email, password, phone, location, account, bank 
  {
    placeholder: 'Enter your name',
    width: 250,
    label: 'Name',
  },
  {
    placeholder: 'Enter your email',
    width: 250,
    keyboardType: 'email-address',
    label: 'Email',
  }, 
// Password must be between 8 and 20 characters
  {
    placeholder: 'Between 8 and 20 characters',
    width: 250,
    label: 'Password',
  },
 // without "-"
  {
    placeholder: 'Enter your phone number',
    width: 250,
    keyboardType: 'phone-pad',
    label: 'Phone Number',
  },
  {
    placeholder: 'Enter your address',
    width: 250,
    label: 'Address',
  },
 // without "-"
  {
    placeholder: 'Enter your account without "-"',
    width: 250,
    label: 'Account',
    keyboardType: 'phone-pad',
  },
  {
    placeholder: 'Enter your Bank',
    width: 250,
    label: 'Bank',
  },
];
