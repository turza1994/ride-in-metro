import React, { useState } from 'react';
import { useParams } from 'react-router';
import Direction from '../Direction/Direction';
import DirectionResult from '../DirectionResult/DirectionResult';
import Map from '../Map/Map';

const Destination = () => {
    let { type } = useParams();
    if(!type){
        type = "Car"
    }
    console.log(type);
    console.log(type);
    const [directionRoute, setDirectionRoute] = useState({})
    // const [isSearchClicked, setIsSearchClicked] = useState(false)
    const handleDirectionRoute = (e)=>{
        e.preventDefault()
        setDirectionRoute({
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value
        })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {
                    !directionRoute.origin ?
                    <Direction handleDirectionRoute={handleDirectionRoute} />
                    :
                    <DirectionResult directionRoute={directionRoute} type={type} />
                }
                <Map directionRoute={directionRoute}/>
            </div>
        </div>
    );
};

export default Destination;