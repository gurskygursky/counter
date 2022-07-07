import React from 'react';
import style from '../CounterWithSettings/Counter.module.css';
import {DisplayCounter} from '../CounterWithSettings/DisplayCounter';
import {Button} from '../components/Button';


type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    minimalValue: number;
    setMinimalValue: (minimalValue: number) => void;
    maximalValue: number;
    setMaximalValue: (maximalValue: number) => void;
    error: string;
}

export const Counter = (props: PropsType) => {

    const increaseCounterValue = () => {
        props.setCounterValue(props.counterValue + 1);
    }
    const resetCounterValue = () => {
        props.setCounterValue(0);
    }

    const disabledButtonInc = props.counterValue === props.maximalValue || props.counterValue < props.minimalValue || props.counterValue < 0;
    const disabledButtonReset = props.counterValue === 0;

    return (
        <div className={style.counterWrapper}>
            <DisplayCounter counterValue={props.counterValue} error={props.error}/>
            <div className={style.buttonsWrapper}>
                <Button buttonTitle={'INC'}
                        callback={increaseCounterValue}
                        disabled={disabledButtonInc}
                        className={style.bttn}
                />
                <Button buttonTitle={'RESET'}
                        callback={resetCounterValue}
                        disabled={disabledButtonReset}
                        className={style.bttn}
                />
            </div>
        </div>
    );
};