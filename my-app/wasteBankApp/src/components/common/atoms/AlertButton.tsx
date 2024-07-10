import styled from 'styled-components'
import { View } from 'react-native';

type AlertButtonProps = {
    okay: boolean;
}

const AlertButton = styled(View)<AlertButtonProps>`
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 54px;
    height: 40px;
    border: 3px solid #40892D;
    background-color: ${({okay}) => (okay ? '#40892D':'#fff')};
`

export default AlertButton;