import { KeyboardTypeOptions } from 'react-native';

export const inputFields: Array<{
  placeholder?: string;
  width?: number;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
}> = [
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
  {
    placeholder: 'Enter your account',
    width: 250,
    label: 'Account',
  },
];
