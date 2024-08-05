import React from 'react';
import { useRoute } from '@react-navigation/native';
import NotMatchedTrashInfoTemplate from '../../components/collector/templates/NotMatchedTrashInfoTemplate';
import MatchedTrashInfoTemplate from '../../components/collector/templates/MatchedTrashInfoTemplate';

const TrashInfoScreen = () => {
  const route = useRoute();
  const { matched } = route.params as { matched: boolean };

  return (
    <>
      {matched ? <MatchedTrashInfoTemplate /> : <NotMatchedTrashInfoTemplate />}
    </>
  );
};

export default TrashInfoScreen;
