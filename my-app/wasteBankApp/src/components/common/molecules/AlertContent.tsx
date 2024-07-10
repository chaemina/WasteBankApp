import AlertText from "../atoms/AlertText";
import AlertTitle from "../atoms/AlertTitle";
import { View } from "react-native";
import styled from "styled-components";

type AlertContentProps = {
    title: string;
    text: string;
  }

const AlertContentBox = styled(View)`
    align-items: center;
    justify-content: center;
    padding: 15px;
`

const AlertContent: React.FC<AlertContentProps> = ({title, text}) => {
    return (
        <AlertContentBox>
            <AlertTitle bold={true}>{title}</AlertTitle>
            <AlertText>{text}</AlertText>
        </AlertContentBox>
    );
}

export default AlertContent;