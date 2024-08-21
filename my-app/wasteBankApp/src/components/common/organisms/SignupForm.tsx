import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputBox from '../molecules/InputBox';
import CustomButton from '../atoms/CustomButton';
import { setUser } from '../../../redux/slice/TemplateUserSlice'; 
import { useNav } from '../../../hooks/useNav';
import { signupUser, signupCollector } from '../../../service/user';

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
  role: string; 
};

const SignupForm: React.FC<SignupFormProps> = ({ inputFields, role }) => {
  const navigation = useNav();
  const methods = useForm();
  const dispatch = useDispatch(); 

  const onSubmit = async (data: any)  => {
    console.log('Form Data:', data); 

    dispatch(setUser(data)); 

    try {
      let response;
      if (role === 'user') {
        response = await signupUser(data);
      } else if (role === 'collector') {
        response = await signupCollector(data);
      }

      console.log('Signup Response:', response);
    
      navigation.push("AuthenticationSelect");
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <InputBox inputs={inputFields} />
      <CustomButton size="sm" label="DAFTAR" onPress={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default SignupForm;
