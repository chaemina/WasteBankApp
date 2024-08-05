import React from 'react';
import CollectorMapTemplate from '../../components/collector/templates/CollectorMapTemplate';
import { data } from '../../constants/MarkerInfo';

const CollectorMapScreen = () => {
  return (
    <>
      <CollectorMapTemplate data={data.response} />
    </>
  );
};

export default CollectorMapScreen;
