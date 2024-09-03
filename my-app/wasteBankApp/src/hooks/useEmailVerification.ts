import React from 'react';
import { useWatch, Control } from 'react-hook-form';
import { emailCheck } from '../service/user';


const useEmailVerification = (control: Control, name: string) => {
  const [emailVerified, setEmailVerified] = React.useState<boolean>(false);
  const email = useWatch({
    control,
    name,
    defaultValue: '',
  });

  const verifyEmail = async () => {
    try {
      const response = await emailCheck(email);
      setEmailVerified(response.response === 'email available');
    } catch (error) {
      setEmailVerified(false);
    }
  };

  return { emailVerified, verifyEmail };
};

export default useEmailVerification;
