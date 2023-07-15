import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;