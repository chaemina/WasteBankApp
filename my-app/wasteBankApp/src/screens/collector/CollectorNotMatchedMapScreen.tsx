import React from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import CollectorMapTemplate from '../../components/collector/templates/CollectorMapTemplate';
import { useQuery } from '@tanstack/react-query';
import { garbagesWaitingList } from '../../service/garbage';
import { GarbageData } from '../../types/type';

const CollectorNotMatchedMapScreen = () => {

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['waitinggarbages'],
    queryFn: garbagesWaitingList,
  });

  if (isLoading) {
    return <CustomText>Loading...</CustomText>;
  }

  return (
    <>
       {data?.response && <CollectorMapTemplate data={data.response as GarbageData[]} />}
    </>
  );
};

export default CollectorNotMatchedMapScreen;
