import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    
    // 저장값 확인을 위한 console.log
    console.log(`setItem... ${key} : ${value}`);
  } catch (e) {
    throw e;
  }
};

export const getItem = async (key: string): Promise<string> => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res || '';
  } catch (e) {
    throw e;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    
    console.log(`removeItem... ${key}`);
  } catch (e) {
    throw e;
  }
};
