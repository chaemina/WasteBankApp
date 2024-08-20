import React from 'react';
import { useRoute } from '@react-navigation/native';
import NotMatchedTrashInfoTemplate from '../../components/collector/templates/NotMatchedTrashInfoTemplate';
import MatchedTrashInfoTemplate from '../../components/collector/templates/MatchedTrashInfoTemplate';

const TrashInfoScreen = () => {
  const route = useRoute();
  const { matched, garbageId } = route.params as { matched: boolean; garbageId: number };

  return (
    <>
      {matched ? (
        <MatchedTrashInfoTemplate garbageId={garbageId} />
      ) : (
        <NotMatchedTrashInfoTemplate garbageId={garbageId} />
      )}
    </>
  );
};

export default TrashInfoScreen;
