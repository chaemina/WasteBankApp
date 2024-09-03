import React from "react";
import CustomTitle from "../../common/atoms/CustomTitle";
import StateBox from "../../common/molecules/StateBox";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";
import { useNav } from "../../../hooks/useNav";

interface CollectorMapTemplateProps {
  data: GarbageData[];
}

const CollectorMapTemplate: React.FC<CollectorMapTemplateProps> = ({ data }) => {
  const navigation = useNav();
  
  if (data.length === 0) {
    return null;
  }

  const isFirstItemMatched = data[0].matched;

  const handleCollectorNavigation = (location: string, matched: boolean, garbageId: number) => {
    navigation.push('TrashInfo', { matched, garbageId });
  };
  
  return (
    <>
      <CustomTitle>
        {isFirstItemMatched ? "Menunggu untuk memulai..." : "Anda dapat memilih sampah"}
      </CustomTitle>
      {/* 수정된 부분: 각 마커의 고유한 garbageId를 전달하도록 함 */}
      <MyMap data={data} navigationHook={handleCollectorNavigation} />
      <StateBox />
    </>
  );
};

export default CollectorMapTemplate;
