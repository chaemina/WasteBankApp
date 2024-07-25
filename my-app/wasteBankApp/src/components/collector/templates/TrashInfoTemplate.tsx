import React from 'react';
import ScrollContainer from '../../common/atoms/ScrollContainer';
import CustomTitle from '../../common/atoms/CustomTitle';
import CustomButton from '../../common/atoms/CustomButton';
import TrashInfoCard from '../organisms/TrashInfoCard';
import CustomText from '../../common/atoms/CustomText';
import styled from 'styled-components/native';

const CardBox = styled.View`
  width: 100%;
  background-color: #40892d;
`

const TotalBox = styled.View`
    width: 90%;
`

const TrashInfoTemplate = () => {
  const data = {
    organic: {
      RP: '60.000',
      Breat: '1.0kg',
    },
    non_organic: {
      RP: '60.000',
      Breat: '1.0kg',
    },
    totalWeight: 2.0,
    totalValue: 140.0,
  };

  return (
    <ScrollContainer>
      <CustomTitle>Menunggu di pick-up</CustomTitle>
      {/* 카드 내에서 유기 및 비유기 값 전달 */}
      <CardBox>
        <TrashInfoCard type="Sampah Organik" data={data.organic} />
        <TrashInfoCard type="Sampah Non-Organik" data={data.non_organic} />
      </CardBox>
      {/* 최종 값 출력 */}
      <TotalBox>
        <CustomText>Total yang didapatkan</CustomText>
        <CustomText size='title' bold>{`RP. ${data.totalValue}`}</CustomText>
      </TotalBox>
      <CustomButton size="sm" label='Penerimaan' />
    </ScrollContainer>
  );
};

export default TrashInfoTemplate;
