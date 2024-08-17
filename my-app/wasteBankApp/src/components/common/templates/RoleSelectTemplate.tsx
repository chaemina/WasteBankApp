import React from 'react';
import { useNav } from '../../../hooks/useNav';
import CustomTitle from '../atoms/CustomTitle';
import CustomButton from '../atoms/CustomButton';
import ScrollContainer from '../atoms/ScrollContainer';
import { setRole } from '../../../redux/slice/TemplateRoleSlice';
import { useDispatch } from 'react-redux';

const RoleSelectTemplate = () => {
  const navigation = useNav();
  const dispatch = useDispatch();

  // role 타입을 명시적으로 string으로 지정
  const handleRoleSelection = (role: 'user' | 'collector') => {
    dispatch(setRole(role)); // 역할을 전역 상태로 저장
    navigation.push('Signup'); // 회원가입 페이지로 이동
  };

  return (
    <ScrollContainer>
      <CustomTitle>Select Your Role</CustomTitle>
      {/* 이때 클릭한 버튼에 따라 "user" 혹은 "collector"를 전역 상태로 따로 저장 */}
      <CustomButton 
        size='lg' 
        label='User' 
        onPress={() => handleRoleSelection('user')}
      />
      <CustomButton 
        size='lg' 
        label='Collector' 
        onPress={() => handleRoleSelection('collector')}
      />
    </ScrollContainer>
  );
};

export default RoleSelectTemplate;
