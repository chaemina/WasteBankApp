import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);

  const showDatePicker = (): void => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date): void => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
        </Text> */}
        <Button title="penerimaan" onPress={showDatePicker} />
        <DateTimePickerModal
          date={selectedDate || new Date()}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePicker;
