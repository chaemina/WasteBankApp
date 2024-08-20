import React from 'react';
import CustomTitle from '../../common/atoms/CustomTitle';
import CustomText from '../../common/atoms/CustomText';
import TrashInfoCard from '../organisms/TrashInfoCard';
import styled from 'styled-components/native';
import { garbageDetail } from '../../../service/garbage';
import { useQuery } from '@tanstack/react-query';

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
  const { data, isError, isLoading } = useQuery({
    queryKey: ['garbageinfo', garbageId],
    queryFn: () => garbageDetail({ garbageId }), 
  });

  if (isLoading) {
    return <CustomText>Loading...</CustomText>;
  }

  if (isError) {
    return <CustomText>Error loading data.</CustomText>;
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
