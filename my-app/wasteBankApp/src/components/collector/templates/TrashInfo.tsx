import React from 'react';
import CustomTitle from '../../common/atoms/CustomTitle';
import CustomText from '../../common/atoms/CustomText';
import TrashInfoCard from '../organisms/TrashInfoCard';
import styled from 'styled-components/native';
import { garbageDetail } from '../../../service/garbage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../common/atoms/Loading';
import Container from '../../common/atoms/Container';
import CustomButton from '../../common/atoms/CustomButton';

const CardBox = styled.View`
  width: 100%;
  background-color: #40892d;
`;

const TotalBox = styled.View`
  width: 90%;
  margin-top: 20px;
`;

interface TrashInfoProps {
  garbageId: number;
}

const TrashInfo: React.FC<TrashInfoProps> = ({ garbageId }) => {
  const { data, isError, isLoading,refetch } = useQuery({
    queryKey: ['garbageinfo', garbageId],
    queryFn: () => garbageDetail({ garbageId }), 
  });

  if (isLoading) {
    return  <Loading width={100} height={100} loop={true} />;
  }

  if (isError) {
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

  return (
    <>
      <CustomTitle>Menunggu di pick-up</CustomTitle>
      <CardBox>
        <TrashInfoCard type="Sampah Organik" data={data.organic} />
        <TrashInfoCard type="Sampah Non-Organik" data={data.non_organic} />
      </CardBox>
      <TotalBox>
        <CustomText>Total yang didapatkan</CustomText>
        <CustomText size="title" bold>{`RP. ${data.totalValue}`}</CustomText>
        <CustomText size="title" bold>{`Total Weight : ${data.totalWeight}`}</CustomText>
      </TotalBox>
    </>
  );
};

export default TrashInfo;
