import React from 'react';
import CustomText from '../../components/common/atoms/CustomText';
import { useQuery } from '@tanstack/react-query';
import AdminMapTemplate from '../../components/admin/templates/AdminMapTemplate';
import { adminGarbagesList } from '../../service/garbage';
import { GarbageData } from '../../types/type';
import Loading from '../../components/common/atoms/Loading';
import Container from '../../components/common/atoms/Container';
import CustomButton from '../../components/common/atoms/CustomButton';

const AdminMapScreen = () => {

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['admingarbages'],
    queryFn: adminGarbagesList,
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
                <CustomText>Tidak ada sampah yang diunggah.</CustomText>
      </Container>
    )
  }
  return (
    <>
       <AdminMapTemplate data={data.response as GarbageData[]} />
    </>
  );
};

export default AdminMapScreen;
