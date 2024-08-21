import React, { useEffect } from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import CustomTitle from '../../components/common/atoms/CustomTitle';
import { useQuery } from '@tanstack/react-query';
import { collectorLocationGet } from '../../service/collector';
import { GarbageData } from '../../types/type';
import MyMap from '../../components/common/templates/MyMap';
import { useRoute } from '@react-navigation/native';
import Loading from '../../components/common/atoms/Loading';
import Container from '../../components/common/atoms/Container';
import CustomButton from '../../components/common/atoms/CustomButton';


interface RouteParams {
  garbageId: number;
}

const CollectorLocationScreen = () => {
  const route = useRoute();
  const { garbageId } = route.params as RouteParams;

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['collectorlocation', garbageId],
    queryFn: () => collectorLocationGet({ garbageId }),
    enabled: true, // 쿼리를 활성화합니다.
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000); // 5초마다 요청

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
    };
  }, [refetch]);

  if (isLoading) {
    return  <Loading width={100} height={100} loop={true} />;
  }

  if (isError && !data) {
    return (
      <Container>
        <CustomText>데이터를 불러오는 중에 오류가 발생했습니다.</CustomText>
        <CustomText>다시 시도해주세요.</CustomText>
        <CustomButton 
          label='Refresh' 
          size='lg' 
          onPress={() => refetch()}  
        />
      </Container>
    );
  }

  const handleIndividualNavigation = (location: string, matched: boolean, garbageId: number) => {
    // 개별 사용자 전용 네비게이션 동작 정의
  };

  // 데이터가 객체일 경우 GarbageData 배열로 감싸기
  const mapData: GarbageData[] = Array.isArray(data) ? data : [{
    garbageId: garbageId,
    location: 'User Location',
    latitude: data.latitude,
    longitude: data.longitude,
    matched: true,
    daysSinceRegistration: -1,
  }];

  return (
    <>
      <CustomTitle>Sampah sedang dijemput!</CustomTitle>
      <MyMap data={mapData} navigationHook={handleIndividualNavigation} />
    </>
  );
};

export default CollectorLocationScreen;
