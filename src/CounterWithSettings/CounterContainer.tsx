import React, {useState} from 'react';
import style from './Counter.module.css';
import {DisplayCounter} from './DisplayCounter';

export const CounterContainer = () => {

    const [counterValue, setCounterValue] = useState<number>(0);

    const increaseCounterValue = () => {
        setCounterValue(counterValue + 1);
    }
    const resetCounterValue = () => {
        setCounterValue(0);
    }


    return (
        <div className={style.counterWrapper}>
            <DisplayCounter counterValue={counterValue}/>
            <div className={style.buttonsWrapper}>
                <button className={style.bttn} onClick={increaseCounterValue} disabled={counterValue === 10}>INC
                </button>
                <button className={style.bttn} onClick={resetCounterValue} disabled={counterValue === 0}>RESET</button>
            </div>
        </div>
    );
};