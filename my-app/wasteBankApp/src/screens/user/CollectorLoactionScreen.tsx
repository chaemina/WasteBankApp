import React from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import { useQuery } from '@tanstack/react-query';
import { collectorLocationGet } from '../../service/collector';
import { GarbageData } from '../../types/type';
import MyMap from '../../components/common/templates/MyMap';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  garbageId: number;
}

const CollectorLocationScreen = () => {
  const route = useRoute();
  const { garbageId } = route.params as RouteParams;

  const { data, isError, isLoading } = useQuery({
    queryKey: ['collectorlocation', garbageId],
    queryFn: () => collectorLocationGet({ garbageId }),
  });

  if (isLoading) {
    return <CustomText>Loading...</CustomText>;
  }

  if (isError || !data) {
    return <CustomText>Error loading data</CustomText>;
  }

  const handleIndividualNavigation = (location: string, matched: boolean, garbageId: number) => {
    // 개별 사용자 전용 네비게이션 동작 정의
  };

  // 데이터가 객체일 경우 GarbageData 배열로 감싸기
  const mapData: GarbageData[] = Array.isArray(data) ? data : [{
    garbageId: garbageId,
    location:  'User Location',
    latitude: data.latitude,
    longitude: data.longitude,
    matched: true,
    daysSinceRegistration: -1,
  }];

  return (
    <>
      <MyMap data={mapData} navigationHook={handleIndividualNavigation} />
    </>
  );
};

export default CollectorLocationScreen;
