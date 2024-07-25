import React from 'react';
import { Modal, View } from 'react-native';
import styled from 'styled-components/native';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import { moderateScale, scale } from '../../../utils/Scale';

const AlertBox = styled(View)`
  width: ${moderateScale(300, 0.3)}px;
  height: ${moderateScale(200, 0.3)}px;
  border-radius: 28px;
  border: 3px solid #40892d;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: ${scale(20)}px;
`;

const AlertButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: ${scale(15)}px;
`;

const Spacer = styled(View)`
  width: ${moderateScale(30, 0.3)}px;
`;

const ModalBackground = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export type AlertProps = {
  title: string;
  text: string;
  visible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<AlertProps> = ({ title, text, visible, onClose }) => {
  return (
    <Modal transparent={true} animationType="none" visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <AlertBox>
          <CustomText bold size="title" color="#40892d">
            {title}
          </CustomText>
          <CustomText size="body" color="#000">
            {text}
          </CustomText>
          <AlertButtonContainer>
            <CustomButton size="xs" label="Okay" onPress={onClose} color="#40892d" />
            <Spacer />
            <CustomButton size="xs" label="No" onPress={onClose} color="white" />
          </AlertButtonContainer>
        </AlertBox>
      </ModalBackground>
    </Modal>
  );
};

export default CustomAlert;
