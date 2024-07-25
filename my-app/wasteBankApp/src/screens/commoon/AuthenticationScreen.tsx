import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import EmailTemplate from '../../components/common/templates/EmailTemplate';
import WhatsAppTemplate from '../../components/common/templates/WhatsAppTemplate';
import { RootStackParam } from "../../hooks/useNav"

type AuthenticationScreenRouteProp = RouteProp<RootStackParam, 'Authentication'>;

const AuthenticationScreen = () => {
  const route = useRoute<AuthenticationScreenRouteProp>();
  const { method } = route.params;

  return (
    <>
      {method === 'Email' && <EmailTemplate />}
      {method === 'WHATSAPP' && <WhatsAppTemplate />}
    </>
  );
};

export default AuthenticationScreen;
