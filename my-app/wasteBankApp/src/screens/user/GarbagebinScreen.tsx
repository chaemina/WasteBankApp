import React from 'react';
import MyWebView from '../../components/common/templates/MyWebView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../../hooks/useNav';

type GarbagebinScreenProps = NativeStackScreenProps<RootStackParam, 'Garbagebin'>;

const GarbagebinScreen: React.ComponentType<GarbagebinScreenProps> = ({ route }) => {
  const { url } = route.params;

  return (
    <MyWebView url={url} />
  );
};

export default GarbagebinScreen;
