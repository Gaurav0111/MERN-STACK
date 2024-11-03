import React, { useState, useEffect } from 'react';
import '../../assets/css/IncreamentAndDecrement.css'

const IncrementAndDrecrement = () => {

    const [cValue, setValue] = useState(0);
    const incrementValue = () => {
        setValue(cValue + 1);
    }
    const decrementValue = () => {
        setValue(cValue - 1);
    }

    return (
        <div className='outerContainer' >
            <h1>{cValue}</h1>
            <button onClick={incrementValue} >Increment</button>
            <button onClick={decrementValue} >Decrement</button>
        </div>
    );

}

export default IncrementAndDrecrement;