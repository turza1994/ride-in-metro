import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.733348, lng: 90.406707
};


function Map({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <div className="col-sm-8">
            <LoadScript 
                googleMapsApiKey= "AIzaSyAEQl1Kn2n9m_-ssG_R3p0LjHeP-1W8G0M"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={16}
                >
                    {
                        origin !== '' && destination !== '' && <DirectionsService
                        // required
                        options={{
                        destination: destination,
                        origin: origin,
                        travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if(res !== null){
                            setDirectionResponse(res);
                            }
                        }}
                    />
                    }
                    {
                        directionResponse && <DirectionsRenderer
                        // required
                        options={{ 
                        directions: directionResponse
                        }}
                        
                    />
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)