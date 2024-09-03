import React, { useState } from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import SignupForm from '../../common/organisms/SignupForm';
import { CollectorinputFields } from '../../../constants/Info';
import CustomToast from '../../common/atoms/CustomToast';

type CollectorSignupTemplateProps = {
  role: string; 
};

const CollectorSignupTemplate: React.FC<CollectorSignupTemplateProps> = ({ role }) => {
  const [toastVisible, setToastVisible] = useState(false); 
  const [toastMessage, setToastMessage] = useState(''); 

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5500); 
  };

  return (
    <>
      <ScrollContainer>
        <CustomTitle>Buat Akun Baru</CustomTitle>
        <SignupForm inputFields={CollectorinputFields} role={role} showToast={showToast} /> 
      </ScrollContainer>
      <CustomToast message={toastMessage} visible={toastVisible} /> 
    </>
  );
};

export default CollectorSignupTemplate;
