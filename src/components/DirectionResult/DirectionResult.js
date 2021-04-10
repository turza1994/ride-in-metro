import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


const DirectionResult = ({directionRoute, type}) => {
    const [destinationRider, setDestinationRider] = useState([]);
    useEffect(()=>{
        const filteredResult= data.filter(dt => dt.type === type);
        setDestinationRider(filteredResult);
        console.log(destinationRider);
    },[type])
    return (
        <div className="col-sm-4">
            <div className="w-75 bg-light p-2">
                <div className="bg-danger rounded lead ps-4 fs-4">
                    <p>{directionRoute.origin}</p>
                    <p>{directionRoute.destination}</p>
                </div>
                <div>
                    {
                        destinationRider.map(dr => 
                            <div className="d-flex justify-content-around">
                                <img className="w-25" src={dr.image} alt=""/>
                                <p>{dr.type}</p>
                                <FontAwesomeIcon icon={faUserFriends} />
                                <p>{dr.capacity}</p>
                                <p>{dr.cost}</p>
                            </div>
                            )
                    }
                </div>
            </div>

        </div>
    );
};

export default DirectionResult;