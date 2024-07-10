import styled from "styled-components";
import AlertButton from "../atoms/AlertButton";
import CustomText from "../atoms/CustomText";
import { View } from "react-native";
import React from "react";

const AlertButtonBox = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

type AlertButtonTextProps  = {
    okay: boolean;
}

const AlertButtonText = styled(CustomText)<AlertButtonTextProps>`
    font-size: 12px;
    color: ${({okay}) => (okay ? '#fff':'#000')};
`

const Spacer = styled(View)`
    width: 30px;
`

const AlertButtons: React.FC = () => {
    return (
        <AlertButtonBox>
            <AlertButton okay={true}>
                <AlertButtonText okay={true}>Okay</AlertButtonText>
            </AlertButton>
            <Spacer/>
            <AlertButton okay={false}>
                <AlertButtonText okay={false}>No</AlertButtonText>
            </AlertButton>
        </AlertButtonBox>
    )
}

export default AlertButtons;