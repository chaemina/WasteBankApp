import React from "react";
import { View } from "react-native";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";

interface CollectorMapTemplateProps {
  data: GarbageData[];
}


const CustomBox = styled(View)`
  width : 100%;
  align-items: center;
  justify-content: center;
`;


const IndividualTrashMapTemplate: React.FC<CollectorMapTemplateProps> = ({ data }) => {

  return (
    <>
      <MyMap data={data} />
      <CustomBox>
         {data.map((item) => (
          <CustomText bold>{item.location}</CustomText>
        ))}
      </CustomBox>
    </>
  );
};

export default IndividualTrashMapTemplate;
