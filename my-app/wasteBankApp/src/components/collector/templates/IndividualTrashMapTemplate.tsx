import React from "react";
import { View } from "react-native";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTitle from "../../common/atoms/CustomTitle";
import { scale } from "../../../utils/Scale";

interface CollectorMapTemplateProps {
  data: GarbageData[];
}

const CustomBox = styled(View)`
  width: 100%;
  padding : ${scale(5)}px;
`;

const IndividualTrashMapTemplate: React.FC<CollectorMapTemplateProps> = ({ data }) => {
  const handleIndividualNavigation = (location: string, matched: boolean) => {
    // 개별 사용자 전용 네비게이션 동작 정의
  };

  return (
    <>
     <CustomBox>
       <CustomText color="green" bold size="title">Jangan matikan layar selama pengumpulan!</CustomText>
      </CustomBox>
      <MyMap data={data} navigationHook={handleIndividualNavigation} />
      <CustomBox>
        {data.map((item) => 
          item.location !== "User Location" && (
            <CustomText key={item.location} bold>
              {item.location}
            </CustomText>
          )
        )}
      </CustomBox>
    </>
  );
};

export default IndividualTrashMapTemplate;
