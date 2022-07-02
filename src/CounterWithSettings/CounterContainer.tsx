import React, {useState} from 'react';
import style from './Counter.module.css';
import {DisplayCounter} from './DisplayCounter';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    maximalValue: number;
}

export const CounterContainer = (props: PropsType) => {

    // const [counterValue, setCounterValue] = useState<number>(0);

    const increaseCounterValue = () => {
        props.setCounterValue(props.counterValue + 1);
    }
    const resetCounterValue = () => {
        props.setCounterValue(0);
    }


    return (
        <div className={style.counterWrapper}>
            <DisplayCounter counterValue={props.counterValue}/>
            <div className={style.buttonsWrapper}>
                <button className={style.bttn} onClick={increaseCounterValue} disabled={props.counterValue === props.maximalValue}>INC
                </button>
                <button className={style.bttn} onClick={resetCounterValue} disabled={props.counterValue === 0}>RESET</button>
            </div>
        </div>
    );
};