import React from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import ScrollContainer from '../atoms/ScrollContainer';

const AuthenticationSelectTemplate = () => {
  const navigation = useNav();

  return (
    <ScrollContainer>
        <CustomTitle >Verify your account With</CustomTitle>
        <CustomButton
        size='lg'
        label='Email'
        onPress={() => { navigation.push('Authentication', { method: 'Email' }) }}
      />
      <CustomButton
        size='lg'
        label='WHATSAPP'
        onPress={() => { navigation.push('Authentication', { method: 'WHATSAPP' }) }}
      />
    </ScrollContainer>
  );
};

export default AuthenticationSelectTemplate;