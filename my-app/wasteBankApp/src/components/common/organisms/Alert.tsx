import styled from "styled-components";
import AlertButtons from "../molecules/AlertButtons";
import AlertContent from "../molecules/AlertContent";
import { View } from "react-native";

export type AlertProps = {
    title: string;
    text: string;
}

const AlertBox = styled(View)`
    width: 300px;
    height: 200px;
    border-radius: 28px;
    border: 3px solid #40892d;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`

const Alert: React.FC<AlertProps> = ({title, text}) => {
    return (
        <AlertBox>
            <AlertContent title={title} text={text}/>
            <AlertButtons/>
        </AlertBox>
    )
}

export default Alert;