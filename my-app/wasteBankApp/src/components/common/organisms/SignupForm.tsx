import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputBox from '../molecules/InputBox';
import CustomButton from '../atoms/CustomButton';
import { setUser } from '../../../redux/slice/TemplateUserSlice'; 
import { useNav } from '../../../hooks/useNav';
import { signupUser, signupCollector } from '../../../service/user';
import Loading from '../atoms/Loading'; 

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
  showToast: (message: string) => void; 
};

const SignupForm: React.FC<SignupFormProps> = ({ inputFields, role, showToast }) => {
  const navigation = useNav();
  const methods = useForm();
  const dispatch = useDispatch(); 
  const [isLoading, setIsLoading] = useState(false); 
  const [emailVerified, setEmailVerified] = useState(false); 

  const onSubmit = async (data: any)  => {
    if (!emailVerified) {
      showToast('Silakan periksa duplikat email terlebih dahulu.');
      return;
    }

    console.log('Form Data:', data); 

    try {
      setIsLoading(true); 
      let response;
      if (role === 'user') {
        response = await signupUser(data);
      } else if (role === 'collector') {
        response = await signupCollector(data);
      }

      console.log('Signup Response:', response);
      dispatch(setUser(data)); 

      navigation.push("AuthenticationSelect");
    } catch (error) {
      console.error('Signup failed:', error);
      showToast('Pendaftaran gagal. Coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>    
      {isLoading ? (
        <Loading width={100} height={100} loop={true} /> 
      ) : (
        <FormProvider {...methods}>
          <InputBox inputs={inputFields} setEmailVerified={setEmailVerified} />
          <CustomButton 
            size="sm" 
            label="DAFTAR" 
            onPress={methods.handleSubmit(onSubmit)} 
          />
        </FormProvider>
      )}
    </>
  );
};

export default SignupForm;
