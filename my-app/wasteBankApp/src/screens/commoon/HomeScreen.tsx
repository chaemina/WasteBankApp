import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { useNav } from '../../hooks/useNav';
import CustomButton from '../../components/common/atoms/CustomButton';
import CustomText from '../../components/common/atoms/CustomText';
import ScrollContainer from '../../components/common/atoms/ScrollContainer';
import CustomInput from '../../components/common/atoms/CustomInput';
import CustomAlert from '../../components/common/atoms/CustomAlert';


// Components Using Example Code 
const HomeScreen = () => {
  const navigation = useNav();
  
  return (
    <ScrollContainer>
      <CustomText>HomeScreen</CustomText>
      <CustomButton 
        size='lg'
        label="Open Modal" 
        onPress={()=> navigation.push('Login')} 
      />
      <CustomInput
        placeholder="Enter text"
        label="Half Width Input"
        width={150}
      />
      <CustomInput
        placeholder="Enter text"
        label="Full Width Input"
      />
    
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HomeScreen;
