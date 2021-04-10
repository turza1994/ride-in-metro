import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Transport.css'

const Transport = (props) => {
    const{type, image} = props.transport
    const history = useHistory()
    const handleClick = (type)=>{
        history.push(`/destination/${type}`);
    }
    return (
        <div className="col-sm-3 d-flex justify-content-center" onClick={()=>handleClick(type)}>
                <div className="transport bg-light d-flex flex-column justify-content-center align-items-center py-5 rounded">
                    <img className="w-75" src={image} alt=""/>
                    <h3>{type}</h3>
                </div>
        </div>
    );
};

export default Transport;