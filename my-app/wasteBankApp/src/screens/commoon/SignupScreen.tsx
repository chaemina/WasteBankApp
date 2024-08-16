import React from 'react';
import UserSignupTemplate from '../../components/user/templates/UserSignupTemplate';
import CollectorSignupTemplate from '../../components/collector/templates/CollectorSignupTemplate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/RootReducer';

const SignupScreen = () => {
  // Redux 상태에서 role 값을 가져옵니다.
  const role = useSelector((state: RootState) => state.templateRole.role);

  return (
    <>
      {/* role 값에 따라 다른 컴포넌트를 렌더링 */}
      {role === 'user' ? <UserSignupTemplate /> : <CollectorSignupTemplate />}
    </>
  );
};

export default SignupScreen;
