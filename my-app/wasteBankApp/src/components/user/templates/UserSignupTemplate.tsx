import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SinupForm';
import { inputFields } from '../../../constants/UserInfo';
import CustomButton from '../../common/atoms/CustomButton';

const UserSignupTemplate = () => {
  return (
    <ScrollContainer>
      <CustomTitle>Create User Account</CustomTitle>
      <SignupForm inputFields={inputFields} />
      <CustomButton size="sm" label='Sign Up'/>
    </ScrollContainer>
  );
};

export default UserSignupTemplate;
