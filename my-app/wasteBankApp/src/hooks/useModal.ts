import { useState, useCallback } from 'react';

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return {
    modalVisible,
    openModal,
    closeModal,
  };
};

export default useModal;

//  const { modalVisible, openModal, closeModal } = useModal();
//  <CustomButton size='xs' label="Cancel" onPress={openModal} />

//  <CustomAlert
//    title="Alert"
//    text="Do you want to proceed?"
//    visible={modalVisible}
//    onClose={closeModal}
// />