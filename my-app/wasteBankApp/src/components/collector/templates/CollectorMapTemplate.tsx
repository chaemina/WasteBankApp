import React from "react";
import CustomTitle from "../../common/atoms/CustomTitle";
import StateBox from "../../common/molecules/StateBox";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";

interface CollectorMapTemplateProps {
  data: GarbageData[];
}

const CollectorMapTemplate: React.FC<CollectorMapTemplateProps> = ({ data }) => {
  if (data.length === 0) {
    return null; // 데이터가 없는 경우 렌더링하지 않음
  }

  const isFirstItemMatched = data[0].matched;

  return (
    <>
      <CustomTitle>
        {isFirstItemMatched ? "Menunggu untuk memulai..." : "You Can Select Trash"}
      </CustomTitle>
      <MyMap data={data} />
      <StateBox />
    </>
  );
};

export default CollectorMapTemplate;
