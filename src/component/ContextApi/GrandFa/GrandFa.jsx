import React, { createContext, useState } from 'react';
import './GrandFa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
export const RingContext = createContext(0);
export const MoneyContext = createContext(0);

const GrandFa = () => {
    const ring = ['golden', 'diamond'];
    const [money, setMoney] = useState(0);
    return (
        <div className='grandfa'>
            <h2>GrandFa</h2>
            <p> <small>Account balance: {money}</small></p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandFa;