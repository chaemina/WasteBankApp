import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { GarbageData } from '../types/type';

export type RootStackParam = {
  Login: undefined;
  RoleSelect: undefined;
  Main: undefined;
  Signup: undefined;
  AuthenticationSelect: undefined;
  Authentication: { method: string };
  TrashInfo: { matched: boolean; garbageId: number };
  Garbagebin : { url: string };
  CollectorLocationCheckScreen: undefined;
  AdminMapView: undefined;
  CollectorMatched : undefined;
  CollectorNotMatched : undefined;
  IndividualTrashMapView : { data: GarbageData, garbageId?: number};
  CollectorLocation : {garbageId: number};
  LocationTest : undefined;
  SplashScreen : undefined;
};

export const useNav = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return navigation;
};
