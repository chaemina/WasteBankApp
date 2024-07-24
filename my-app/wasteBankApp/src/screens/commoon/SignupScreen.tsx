import React from 'react';
import UserSignupTemplate from '../../components/user/templates/UserSignupTemplate';
import CollectorSignupTemplate from '../../components/collector/templates/CollectorSignupTemplate';

const SignupScreen = () => {
  const isUser = true; 

  return (
    <>
      {isUser ? <UserSignupTemplate /> : <CollectorSignupTemplate />}
    </>
  );
};

export default SignupScreen;
