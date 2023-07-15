import React, { useContext } from 'react';
import { RingContext } from '../GrandFa/GrandFa';

const Spacial = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h4>Spacial</h4>
            <p>Ring: <small>{gift[1]}</small> </p>
        </div>
    );
};

export default Spacial;