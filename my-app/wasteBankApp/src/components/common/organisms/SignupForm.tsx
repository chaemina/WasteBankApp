import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputBox from '../molecules/InputBox';
import CustomButton from '../atoms/CustomButton';
import { setUser } from '../../../redux/slice/TemplateUserSlice'; // TemplateUserSlice에서 setUser 가져오기
import { useNav } from '../../../hooks/useNav';

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
  const navigation = useNav();
  const methods = useForm();
  const dispatch = useDispatch(); 

  const onSubmit = (data: any) => {
    console.log('Form Data:', data); 


    dispatch(setUser(data)); 
    navigation.push("AuthenticationSelect");
  };

  return (
    <FormProvider {...methods}>
      <InputBox inputs={inputFields} />
      <CustomButton size="sm" label="Sign Up" onPress={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default SignupForm;
