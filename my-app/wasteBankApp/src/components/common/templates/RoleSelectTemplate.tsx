import React from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import ScrollContainer from '../atoms/ScrollContainer';

const RoleSelectTemplate = () => {
  const navigation = useNav();

  return (
    <ScrollContainer>
        <CustomTitle >Select Your Role</CustomTitle>
             <CustomButton size='lg' label='User' onPress={() => { navigation.push('Signup') }}/>
             <CustomButton size='lg' label='Collector' onPress={() => { navigation.push('Signup') }}/>
    </ScrollContainer>
  );
};

export default RoleSelectTemplate;
