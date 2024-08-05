import React, { useState } from 'react';
import CustomTitle from '../../common/atoms/CustomTitle';
import CustomText from '../../common/atoms/CustomText';
import TrashInfoCard from '../organisms/TrashInfoCard';
import styled from 'styled-components/native';

const CardBox = styled.View`
  width: 100%;
  background-color: #40892d;
`;

const TotalBox = styled.View`
  width: 90%;
  margin-top: 20px;
`;


const TrashInfo = () => {

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
    <>
      <CustomTitle>Menunggu di pick-up</CustomTitle>
      <CardBox>
        <TrashInfoCard type="Sampah Organik" data={data.organic} />
        <TrashInfoCard type="Sampah Non-Organik" data={data.non_organic} />
      </CardBox>
      <TotalBox>
        <CustomText>Total yang didapatkan</CustomText>
        <CustomText size='title' bold>{`RP. ${data.totalValue}`}</CustomText>
      </TotalBox>
    </>
  );
};

export default TrashInfo;
