import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../../common/atoms/CustomText';
import { scale } from '../../../utils/Scale';

const Card = styled.View`
  width: 100%;
  padding: ${scale(20)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.View`
  flex: 2;
`;

const RightContainer = styled.View`
  flex: 1;
`;

type TrashInfoCardProps = {
  data: {
    RP: string;
    Breat: string;
  };
  type: string;
};

const TrashInfoCard: React.FC<TrashInfoCardProps> = ({ data, type }) => {
  const { RP, Breat } = data;
  return (
    <Card>
      <LeftContainer>
        <CustomText color='white'>{type}</CustomText>
        <CustomText color='white'>{`RP. ${RP}`}</CustomText>
      </LeftContainer>
      <RightContainer>
        <CustomText color='white'>{`Berat: ${Breat}`}</CustomText>
      </RightContainer>
    </Card>
  );
};

export default TrashInfoCard;
