import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DatePickerProps {
  visible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  date?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ visible, onConfirm, onCancel, date }) => {
  const today = new Date();


  return (
    <DateTimePickerModal
      isVisible={visible}
      mode="date"
      onConfirm={onConfirm}
      onCancel={onCancel}
      date={date || new Date()} // 기본값을 여기서 설정
      minimumDate={today} // 최소 선택 가능 날짜 설정
    />
  );
};

export default DatePicker;
