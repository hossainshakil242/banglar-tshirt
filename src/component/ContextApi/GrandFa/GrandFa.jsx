import React, { createContext } from 'react';
import './GrandFa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
export const RingContext = createContext(0);

const GrandFa = () => {
    const gift = ['golden', 'diamond'];
    return (
        <div className='grandfa'>
            <h2>GrandFa</h2>
            <RingContext.Provider value={gift}>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default GrandFa;