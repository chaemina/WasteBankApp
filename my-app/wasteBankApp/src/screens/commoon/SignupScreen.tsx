import React from 'react';
import UserSignupTemplate from '../../components/user/templates/UserSignupTemplate';
import CollectorSignupTemplate from '../../components/collector/templates/CollectorSignupTemplate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/RootReducer';

const SignupScreen = () => {
  const role = useSelector((state: RootState) => state.templateRole.role);

  return (
    <>
      {/* role 값을 SignupForm에 전달 */}
      {role === 'user' ? <UserSignupTemplate role={role} /> : <CollectorSignupTemplate role={role} />}
    </>
  );
};

export default SignupScreen;
