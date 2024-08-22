import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ArrowIcon from "../../../assets/Imgaes/ic_arrow_back.svg"

interface ArrowBackButtonProps {
  onPress: () => void;
}

const ArrowBackButton: React.FC<ArrowBackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <ArrowIcon width={35} height={35} />
      </View>
    </TouchableOpacity>
  );
};

export default ArrowBackButton;
