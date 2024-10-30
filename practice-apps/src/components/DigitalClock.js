import React, { useState } from 'react';
import '../assets/css/DigitalClock.css';


const DigitalClock = () => {

    let curDare = new Date().toLocaleTimeString();
    const [cTime, setcTime] = useState(curDare);
    const updateTime = () => {
        curDare = new Date().toLocaleTimeString();
        setcTime(curDare);
    }
    setInterval(updateTime, 1000);
    return (
        <>
            <h1>{cTime}</h1>
        </>
    );
}

export default DigitalClock;