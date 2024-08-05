import React from "react";
import StateBox from "../../common/molecules/StateBox";
import CustomTitle from "../../common/atoms/CustomTitle";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";

interface AdminMapTemplateProps {
  data: GarbageData[];
}

const AdminMapTemplate: React.FC<AdminMapTemplateProps> = ({ data }) => {
  return (
    <>
      <CustomTitle>Hello Admin</CustomTitle>
      <MyMap data={data} />
      <StateBox />
    </>
  );
};

export default AdminMapTemplate;
