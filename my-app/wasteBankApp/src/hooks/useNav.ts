import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParam = {
  Login: undefined;
  RoleSelect: undefined;
  Signup: undefined;
  AuthenticationSelect: undefined;
  Authentication: { method: string };
};

export const useNav = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return navigation;
};
