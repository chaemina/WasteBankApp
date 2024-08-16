import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SinupForm';
import { UserinputFields } from '../../../constants/Info';

const UserSignupTemplate = () => {

  return (
    <ScrollContainer>
      <CustomTitle>Create User Account</CustomTitle>
      <SignupForm inputFields={UserinputFields} />
    </ScrollContainer>
  );
};

export default UserSignupTemplate;
