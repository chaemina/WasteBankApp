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

  const handleCollectorNavigation = (location: string, matched: boolean) => {
    if (matched) {
      navigation.push('TrashInfo', { matched });
    } else {
      navigation.push('TrashInfo', { matched: false });
    }
  };

  return (
    <>
      <CustomTitle>
        {isFirstItemMatched ? "Menunggu untuk memulai..." : "You Can Select Trash"}
      </CustomTitle>
      <MyMap data={data} navigationHook={handleCollectorNavigation} />
      <StateBox />
    </>
  );
};

export default CollectorMapTemplate;
