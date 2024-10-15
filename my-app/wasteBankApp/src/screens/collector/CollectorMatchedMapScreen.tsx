import React from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import CollectorMapTemplate from '../../components/collector/templates/CollectorMapTemplate';
import { useQuery } from '@tanstack/react-query';
import { garbagesList } from '../../service/garbage';
import { GarbageData } from '../../types/type';
import Loading from '../../components/common/atoms/Loading';
import Container from '../../components/common/atoms/Container';
import CustomButton from '../../components/common/atoms/CustomButton';

const CollectorMatchedMapScreen = () => {

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['matchedgarbages'],
    queryFn: garbagesList,
  });

  if (isLoading) {
    return  <Loading width={100} height={100} loop={true} />;
  }

  if (isError) {
    return (
      <Container>
        <CustomText>Terjadi kesalahan saat memuat data.</CustomText>
        <CustomText>Silakan coba lagi.</CustomText>
        <CustomButton 
          label='Refresh' 
          size='lg' 
          onPress={() => refetch()}  
        />
      </Container>
    );
  }

  if (!data?.response || data.response.length === 0) {
    return  ( 
      <Container>
                <CustomText>Tidak ada sampah yang diterima.</CustomText>
      </Container>
    )
  }
  return (
    <>
       <CollectorMapTemplate data={data.response as GarbageData[]} />
    </>
  );
};

export default CollectorMatchedMapScreen;
