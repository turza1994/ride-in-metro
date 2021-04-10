import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import data from '../../data/data.json'

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(()=>{
        setTransport(data)
    },[])

    const myStyle = { 
        height: '100%',
        backgroundColor:' #ffffff',
        backgroundImage: 'linear-gradient(to right, #d31027, #ea384d)'
    }
    return (
        <div style={myStyle}>
            <div className="container">
                <div className="row align-items-center justify-content-center pt-5 gy-3">
                    {
                        transport.map(cv => <Transport key={cv.id} transport={cv} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;