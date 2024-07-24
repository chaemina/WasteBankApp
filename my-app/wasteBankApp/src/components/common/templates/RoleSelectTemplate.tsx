import React from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import Container from '../atoms/Container';
import ScrollContainer from '../atoms/ScrollContainer';

const RoleSelectTemplate = () => {
  const navigation = useNav();

  return (
    <Container>
        <CustomTitle >Select Your Role</CustomTitle>
             <CustomButton size='lg' label='User'/>
             <CustomButton size='lg' label='Collector'/>
    </Container>
  );
};

export default RoleSelectTemplate;
