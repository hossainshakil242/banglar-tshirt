import React, { useContext } from 'react';
import { RingContext } from '../GrandFa/GrandFa';

const Spacial = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Spacial</h4>
            <p>Ring: <small>{ring[1]}</small> </p>
        </div>
    );
};

export default Spacial;