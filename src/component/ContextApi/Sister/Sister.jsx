import React, { useContext } from 'react';
import { RingContext } from '../GrandFa/GrandFa';

const Sister = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h3>Sister</h3>
            <p>Ring: <small>{gift[0]}</small></p>
        </div>
    );
};

export default Sister;