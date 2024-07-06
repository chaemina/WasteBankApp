import { Button, Text, View } from 'react-native';
import { useNav } from '../hooks/useNav';


const HomeScreen = () => {
    const navigation = useNav();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 30 }}>HomeScreen</Text>
      <Button 
        title="Navigation Test" 
        onPress={() => navigation.navigate('Login')} 
        />
    </View>
  );
};

export default HomeScreen;