import React from "react";
import StateBox from "../../common/molecules/StateBox";
import CustomTitle from "../../common/atoms/CustomTitle";
import MyMap from "../../common/templates/MyMap";
import { GarbageData } from "../../../types/type";

interface AdminMapTemplateProps {
  data: GarbageData[];
}

const AdminMapTemplate: React.FC<AdminMapTemplateProps> = ({ data }) => {
  const handleAdminNavigation = (location: string, matched: boolean) => {
    // 관리자 전용 네비게이션 동작 정의
  };
  return (
    <>
      <CustomTitle>Hello Admin</CustomTitle>
      <MyMap data={data} navigationHook={handleAdminNavigation} />
      <StateBox />
    </>
  );
};

export default AdminMapTemplate;
