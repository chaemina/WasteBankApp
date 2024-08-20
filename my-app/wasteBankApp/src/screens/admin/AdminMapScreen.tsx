import React from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import { useQuery } from '@tanstack/react-query';
import AdminMapTemplate from '../../components/admin/templates/AdminMapTemplate';
import { adminGarbagesList } from '../../service/garbage';
import { GarbageData } from '../../types/type';

const AdminMapScreen = () => {

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['admingarbages'],
    queryFn: adminGarbagesList,
  });

  if (isLoading) {
    return <CustomText>Loading...</CustomText>;
  }


  return (
    <>
      {data?.response && <AdminMapTemplate data={data.response as GarbageData[]} />}
    </>
  );
};

export default AdminMapScreen;
