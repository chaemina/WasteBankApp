import { useState, useCallback } from 'react';

interface UseModalReturn {
  modalVisible: boolean;
  selectedId: string | null;
  openModal: (id?: string) => void;
  closeModal: () => void;
}

const useModal = (): UseModalReturn => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openModal = useCallback((id?: string) => {
    if (id) {
      setSelectedId(id);
    }
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setSelectedId(null);
  }, []);

  return {
    modalVisible,
    selectedId,
    openModal,
    closeModal,
  };
};

export default useModal;
