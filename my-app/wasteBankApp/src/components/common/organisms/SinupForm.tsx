import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import InputBox from '../molecules/InputBox';
import CustomButton from '../atoms/CustomButton'; 

type SignupFormProps = {
  inputFields: Array<{
    placeholder?: string;
    width?: number;
    autoFocus?: boolean;
    defaultValue?: string;
    keyboardType?: React.ComponentProps<typeof InputBox>['inputs'][0]['keyboardType'];
    label?: string;
    name: string;
  }>;
};

const SignupForm: React.FC<SignupFormProps> = ({ inputFields }) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data); // 폼 데이터 콘솔 출력
  };

  return (
    <FormProvider {...methods}>
      <InputBox inputs={inputFields} />
      <CustomButton size="sm" label="Sign Up" onPress={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default SignupForm;
