import { KeyboardTypeOptions } from 'react-native';

export const UserinputFields: Array<{
  placeholder?: string;
  width?: number;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  name: string;
  secureTextEntry?: boolean;
  rules?: object; // 유효성 검사 규칙 추가
}> = [
  {
    placeholder: 'Enter your name',
    width: 250,
    label: 'Name',
    name: 'name', 
    rules: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters',
      },
    },
  },
  {
    placeholder: 'Enter your email',
    width: 250,
    keyboardType: 'email-address',
    label: 'Email',
    name: 'email', 
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    placeholder: 'Antara 8 dan 20 karakter',
    width: 250,
    label: 'Password',
    name: 'password', 
    secureTextEntry: true, 
    rules: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'must be between 8 and 20 characters',
      },
      maxLength: {
        value: 20,
        message: 'must be between 8 and 20 characters',
      },
    },
  },
  {
    placeholder: 'Enter your phone number',
    width: 250,
    keyboardType: 'phone-pad',
    label: 'Phone Number',
    name: 'phone', 
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^\+[0-9]+$/, 
        message: 'Phone number must contain only numbers',
      },
    },
  },
  {
    placeholder: 'Enter your address',
    width: 250,
    label: 'Address',
    name: 'location', 
    rules: {
      required: 'Address is required',
    },
  },
  {
    placeholder: 'Masukkan akun Anda tanpa "-"',
    width: 250,
    label: 'Account',
    keyboardType: 'phone-pad',
    name: 'account', 
    rules: {
      required: 'Account is required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Account must contain only numbers',
      },
    },
  },
  {
    placeholder: 'Enter your Bank',
    width: 250,
    label: 'Bank',
    name: 'bank', 
    rules: {
      required: 'Bank is required',
    },
  },
];



export const CollectorinputFields: Array<{
  placeholder?: string;
  width?: number;
  autoFocus?: boolean;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  name: string;
  secureTextEntry?: boolean;
  rules?: object; // 유효성 검사 규칙 추가
}> = [
  {
    placeholder: 'Enter your name',
    width: 250,
    label: 'Name',
    name: 'name', 
    rules: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters',
      },
    },
  },
  {
    placeholder: 'Enter your email',
    width: 250,
    keyboardType: 'email-address',
    label: 'Email',
    name: 'email', 
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    placeholder: 'Antara 8 dan 20 karakter',
    width: 250,
    label: 'Password',
    name: 'password', 
    secureTextEntry: true, 
    rules: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'must be between 8 and 20 characters',
      },
      maxLength: {
        value: 20,
        message: 'must be between 8 and 20 characters',
      },
    },
  },
  {
    placeholder: 'Enter your phone number',
    width: 250,
    keyboardType: 'phone-pad',
    label: 'Phone Number',
    name: 'phone', 
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^\+[0-9]+$/, 
        message: 'Phone number must contain only numbers',
      },
    },
  },
  
  {
    placeholder: 'Enter your address',
    width: 250,
    label: 'Address',
    name: 'location', 
    rules: {
      required: 'Address is required',
    },
  },
]