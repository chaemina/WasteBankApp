import React from 'react';
import IndividualTrashMapTemplate from '../../components/collector/templates/IndividualTrashMapTemplate';

const IndividualTrashMapScreen = () => {

    const data = {
        "success": true,
        "response": [
            {
                "garbageId": 3,
                "location": "광주광역시 북구 123로 45",
                "latitude": 37.541,
                "longitude": 126.987,
                "matched": true,
                "daysSinceRegistration": 2
              },
        ],
        "error": null
      };

  return (
    <>
      < IndividualTrashMapTemplate data={data.response}/>
    </>
  );
};

export default IndividualTrashMapScreen;