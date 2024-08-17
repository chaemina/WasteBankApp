import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SignupForm';
import { UserinputFields } from '../../../constants/Info';

type UserSignupTemplateProps = {
  role: string; 
};

const UserSignupTemplate: React.FC<UserSignupTemplateProps> = ({ role }) => {
  return (
    <ScrollContainer>
      <CustomTitle>Create User Account</CustomTitle>
      <SignupForm inputFields={UserinputFields} role={role} />
    </ScrollContainer>
  );
};

export default UserSignupTemplate;
