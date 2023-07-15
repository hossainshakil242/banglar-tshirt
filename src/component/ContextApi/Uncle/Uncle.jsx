import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandFa/GrandFa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>GrandFa Balance: {money}</p>
            <button onClick={()=>setMoney(money+500)}>Send 500 tk</button>

            <Cousin></Cousin>
        </div>
    );
};

export default Uncle;