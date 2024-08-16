import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SignupForm';
import { CollectorinputFields } from '../../../constants/Info';

const CollectorSignupTemplate = () => {

  return (
    <ScrollContainer>
      <CustomTitle>Create Collector Account</CustomTitle>
      <SignupForm inputFields={CollectorinputFields} />
    </ScrollContainer>
  );
};

export default CollectorSignupTemplate;
