import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParam = {
  Login: undefined;
  RoleSelect: undefined;
  Main: undefined;
  Signup: undefined;
  AuthenticationSelect: undefined;
  Authentication: { method: string };
  TrashInfo: { matched: boolean }; 
  Garbagebin : { url: string };
  AdminMapView: undefined;
  CollectorMapView : undefined;
  IndividualTrashMapView : undefined;
};

export const useNav = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return navigation;
};
