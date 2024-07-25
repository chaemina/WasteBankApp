import React from 'react';
import InputBox from '../molecules/InputBox';

type SignupFormProps = {
  inputFields: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: React.ComponentProps<typeof InputBox>['inputs'][0]['keyboardType'];
    label?: string;
  }>;
};

const SignupForm: React.FC<SignupFormProps> = ({ inputFields }) => {

  return (
    <>
      <InputBox inputs={inputFields} />
    </>
  );
};

export default SignupForm;
