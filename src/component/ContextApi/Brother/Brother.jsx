import React, { useContext } from 'react';
import { MoneyContext } from '../GrandFa/GrandFa';

const Brother = () => {
    const [money] = useContext(MoneyContext);
    
    return (
        <div>
            <h3>Brother</h3>
            <p>GrandFa Balance: {money}</p>
        </div>
    );
};

export default Brother;