import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';

const AlertBox = styled(View)`
  width: 300px;
  height: 200px;
  border-radius: 28px;
  border: 3px solid #40892d;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AlertButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const Spacer = styled(View)`
  width: 30px;
`;

export type AlertProps = {
  title: string;
  text: string;
  visible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<AlertProps> = ({ title, text, visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <AlertBox>
          <CustomText bold={true} size="title" color="#40892d">
            {title}
          </CustomText>
          <CustomText size="body" color="#000">
            {text}
          </CustomText>
          <AlertButtonContainer>
            <CustomButton size="xs" label="Okay" onPress={onClose} color="#40892d" />
            <Spacer />
            <CustomButton size="xs" label="No" onPress={onClose} color="#fff" />
          </AlertButtonContainer>
        </AlertBox>
      </View>
    </Modal>
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

export default CustomAlert;
