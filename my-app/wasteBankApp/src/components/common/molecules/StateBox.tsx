import React from "react";
import CustomText from "../../common/atoms/CustomText";
import { View } from "react-native";
import styled from "styled-components";
import RedIcon from "../../../assets/Imgaes/RedIcon.svg"
import GreenIcon from "../../../assets/Imgaes/GreenIcon.svg"
import OrangeIcon from "../../../assets/Imgaes/OrangeIcon.svg"
import { scale } from "../../../utils/Scale";

const StateBox = () => {
  return (
    <>
      <CustomText size="body" color="#40892D">Keterangan :</CustomText>
      <Section2>
        <ItemView>
          <RedIcon height={scale(60)} />
          <CustomText size="body" color="#D71B1B">3 days ~</CustomText>
        </ItemView>
        <ItemView>
          <OrangeIcon height={scale(60)} />
          <CustomText size="body" color="#FF9900">2 days</CustomText>
        </ItemView>
        <ItemView>
          <GreenIcon height={scale(60)} />
          <CustomText size="body" color="#40892D">1 day</CustomText>
        </ItemView>
      </Section2>
    </>
  );
}

export default StateBox;

const Section2 = styled(View)`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

const ItemView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
