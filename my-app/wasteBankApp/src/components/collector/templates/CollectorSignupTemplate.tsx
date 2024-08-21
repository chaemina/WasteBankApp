import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SignupForm';
import { CollectorinputFields } from '../../../constants/Info';

type CollectorSignupTemplateProps = {
  role: string; 
};

const CollectorSignupTemplate: React.FC<CollectorSignupTemplateProps> = ({ role }) => {
  return (
    <ScrollContainer>
      <CustomTitle>Buat Akun Baru</CustomTitle>
      <SignupForm inputFields={CollectorinputFields} role={role} />
    </ScrollContainer>
  );
};

export default CollectorSignupTemplate;
