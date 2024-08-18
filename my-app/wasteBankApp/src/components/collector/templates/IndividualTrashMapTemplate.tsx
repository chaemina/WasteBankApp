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
  
  const handleIndividualNavigation = (location: string, matched: boolean) => {
    // 개별 사용자 전용 네비게이션 동작 정의
  };

  return (
    <>
      <MyMap data={data} navigationHook={handleIndividualNavigation} />
      <CustomBox>
         {data.map((item) => (
          <CustomText bold>{item.location}</CustomText>
        ))}
      </CustomBox>
    </>
  );
};


export default IndividualTrashMapTemplate;
