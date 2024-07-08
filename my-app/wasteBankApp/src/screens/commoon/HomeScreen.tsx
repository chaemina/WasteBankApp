import { Text, View } from 'react-native';
import { useNav } from '../../hooks/useNav';
import CustomButton from '../../components/common/atoms/CustomButton';
import CustomText from '../../components/common/atoms/CustomText';


const HomeScreen = () => {
    const navigation = useNav();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText>HomeScreen</CustomText>
      <CustomButton 
        label="Navigation Test" 
        onPress={() => navigation.navigate('Login')} 
        />
    </View>
  );
};

export default HomeScreen;