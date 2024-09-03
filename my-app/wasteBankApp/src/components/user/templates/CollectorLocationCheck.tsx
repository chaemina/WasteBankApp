import React from "react";
import StateBox from "../../common/molecules/StateBox";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";

interface CollectorMapTemplateProps {
  data: GarbageData[];
}

const CollectorLocationCheck: React.FC<CollectorMapTemplateProps> = ({ data }) => {
  return (
    <>
      <MyMap data={data} />
      <StateBox />
    </>
  );
};

export default CollectorLocationCheck;
