import React, {useEffect, useState} from 'react';
import style from './Counter.module.css';
import {DisplayCounter} from './DisplayCounter';
import {Button} from '../components/Button';
import {isDisabled} from '@testing-library/user-event/dist/utils';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    minimalValue: number;
    setMinimalValue: (minimalValue: number) => void;
    maximalValue: number;
    setMaximalValue: (maximalValue: number) => void;
}

export const CounterContainer = (props: PropsType) => {

    // const [counterValue, setCounterValue] = useState<number>(0);

    const increaseCounterValue = () => {
        props.setCounterValue(props.counterValue + 1);
    }
    const resetCounterValue = () => {
        props.setCounterValue(0);
    }

    useEffect(() => {
        const getStartCounterValue = localStorage.getItem('startCounterValue');
        const getEndCounterValue = localStorage.getItem('endCounterValue');

        if (getStartCounterValue) {
            props.setMinimalValue(JSON.parse(getStartCounterValue));
            props.setCounterValue(JSON.parse(getStartCounterValue));
        }
        if (getEndCounterValue) {
            props.setMaximalValue(JSON.parse(getEndCounterValue));
        }
    }, []);

    const disabledButtonInc = (props.counterValue === props.maximalValue) || (props.counterValue < props.minimalValue);
    const disabledButtonReset = props.counterValue === 0;

    return (
        <div className={style.counterWrapper}>
            <DisplayCounter counterValue={props.counterValue}/>
            <div className={style.buttonsWrapper}>
                <Button buttonTitle={'INC'}
                        callback={increaseCounterValue}
                        disabled={disabledButtonInc}
                />
                <Button buttonTitle={'RESET'}
                        callback={resetCounterValue}
                        disabled={disabledButtonReset}
                />
                {/*<button className={style.bttn} onClick={increaseCounterValue} disabled={props.counterValue === props.maximalValue || props.counterValue < props.minimalValue}>INC*/}
                {/*</button>*/}
                {/*<button className={style.bttn} onClick={resetCounterValue} disabled={props.counterValue === 0}>RESET</button>*/}
            </div>
        </div>
    );
};