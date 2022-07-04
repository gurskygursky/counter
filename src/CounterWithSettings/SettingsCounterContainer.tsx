import React, {ChangeEvent, useState} from 'react';
import style from './SettingsCounter.module.css';
import {Button} from '../components/Button';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    minimalValue: number;
    setMinimalValue: (minimalValue: number) => void;
    maximalValue: number;
    setMaximalValue: (maximalValue: number) => void;
}

export const SettingsCounterContainer = (props: PropsType) => {

    // const [minimalValue, setMinimalValue] = useState<number>(0);
    // const [maximalValue, setMaximalValue] = useState<number>(0);

    const setStartCounterValue = () => {
        localStorage.setItem('startCounterValue', JSON.stringify(props.minimalValue));
        localStorage.setItem('endCounterValue', JSON.stringify(props.maximalValue));
        props.setCounterValue(props.minimalValue);
    }

    const onChangeMinimalValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMinimalValue(+event.currentTarget.value);
    }
    const onChangeMaximalValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaximalValue(+event.currentTarget.value);
    }
    const clearSettingsCounter = () => {
        localStorage.clear();
        props.setMinimalValue(0);
        props.setMaximalValue(0);
        props.setCounterValue(0);
    }

    const disabledButtonSet = (props.minimalValue >= props.maximalValue || props.minimalValue === props.counterValue);

    return (
        <div className={style.counterWrapper}>
            <div className={style.inputWrapper}>
                <div>
                    <span>Min.</span>
                    <input type={'number'}
                           value={props.minimalValue}
                           onChange={onChangeMinimalValueHandler}
                    />
                </div>
                <div>
                    <span>Max.</span>
                    <input type={'number'}
                           value={props.maximalValue}
                           onChange={onChangeMaximalValueHandler}
                    />
                </div>
            </div>
            <div className={style.buttonsWrapper}>
                <Button buttonTitle={'SET'}
                        callback={setStartCounterValue}
                        disabled={disabledButtonSet}
                />
                <Button buttonTitle={'CLEAR'} callback={clearSettingsCounter}/>
                {/*<button className={style.bttn} onClick={setStartCounterValue} disabled={props.minimalValue >= props.maximalValue || props.minimalValue === props.counterValue}>SET</button>*/}
                {/*<button className={style.bttn} onClick={clearSettingsCounter}>CLEAR</button>*/}
            </div>
        </div>
    );
};
