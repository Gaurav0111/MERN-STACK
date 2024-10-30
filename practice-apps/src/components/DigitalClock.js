import React, { useState, useEffect } from 'react';
import '../assets/css/DigitalClock.css';

const DigitalClock = () => {
    const [cTime, setcTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setcTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock-container">
            <header>React Digital Clock</header>
            <h1 className="time-display">{cTime}</h1>
        </div>
    );
};

export default DigitalClock;
