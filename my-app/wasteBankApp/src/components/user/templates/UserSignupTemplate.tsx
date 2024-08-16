import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SinupForm';
import { UserinputFields } from '../../../constants/UserInfo';
import CustomButton from '../../common/atoms/CustomButton';

const UserSignupTemplate = () => {
  const navigation = useNav();


  return (
    <ScrollContainer>
      <CustomTitle>Create User Account</CustomTitle>
      <SignupForm inputFields={UserinputFields} />
      <CustomButton size="sm" label='Sign Up' onPress={() => { navigation.push('AuthenticationSelect') }}/>
    </ScrollContainer>
  );
};

export default UserSignupTemplate;
