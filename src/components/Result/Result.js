import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';

const Result = (props) => {
  const { type } = props;
  const { pickFrom, pickTo } = props.pick;

  const [showVehicleInfo, setShowVehicleInfo] = useState([]);

  useEffect(() => {
    const filteredResult = data.filter(dt => dt.type === type);
    setShowVehicleInfo(filteredResult);
  }, [type])
  return (
    <div>
      From: {pickFrom}
      To: {pickTo}
      VehicleInfo : {
        showVehicleInfo.map(v => <div>{v.type}</div>)
      }
    </div>
  );
};

export default Result;