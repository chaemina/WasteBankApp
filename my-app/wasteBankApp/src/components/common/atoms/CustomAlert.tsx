import styled from 'styled-components';
import CustomText from '../atoms/CustomText';
import {View} from 'react-native';

const AlertTitle = styled(CustomText)`
  text-align: center;
  color: #40892d;
  font-size: 20px;
  padding: 10px;
`;

const AlertText = styled(CustomText)`
  text-align: center;
  color: #000;
  font-size: 16px;
  padding: 5px;
`;

type AlertButtonProps = {
  okay: boolean;
};

const AlertButton = styled(View)<AlertButtonProps>`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 54px;
  height: 40px;
  border: 3px solid #40892d;
  background-color: ${({okay}) => (okay ? '#40892D' : '#fff')};
`;

const AlertButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 0px 0px;
`;

const AlertButtonText = styled(CustomText)<AlertButtonProps>`
  font-size: 12px;
  color: ${({okay}) => (okay ? '#fff' : '#000')};
`;

const Spacer = styled(View)`
  width: 30px;
`;

const AlertBox = styled(View)`
  width: 300px;
  height: 200px;
  border-radius: 28px;
  border: 3px solid #40892d;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export type AlertProps = {
  title: string;
  text: string;
  visible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<AlertProps> = ({title, text, visible, onClose}) => {
  if (!visible) {
    return null;
  }

  return (
    <View>
      <AlertBox>
        <AlertTitle bold={true}>{title}</AlertTitle>
        <AlertText>{text}</AlertText>
        <AlertButtonContainer>
          <AlertButton okay={true}>
            <AlertButtonText okay={true}>Okay</AlertButtonText>
          </AlertButton>
          <Spacer />
          <AlertButton okay={false}>
            <AlertButtonText okay={false}>No</AlertButtonText>
          </AlertButton>
        </AlertButtonContainer>
      </AlertBox>
    </View>
  );
};

export default CustomAlert;
