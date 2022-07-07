import React, {ChangeEvent} from 'react';
import style from '../CounterWithSettings/SettingsCounter.module.css';
import {Input} from '../components/Input';
import {Button} from '../components/Button';

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    minimalValue: number;
    setMinimalValue: (minimalValue: number) => void;
    maximalValue: number;
    setMaximalValue: (maximalValue: number) => void;
    error: string;
    setError: (error: string) => void;
}

export const SettingsCounter = (props: PropsType) => {

    const setStartCounterValue = () => {
        if (props.minimalValue >= 0) {
            props.setCounterValue(props.minimalValue);
            props.setError('');
        }
        if (props.minimalValue < 0 || props.minimalValue === props.maximalValue) {
            props.setError('Incorrect Value');
        }
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

    const disabledButtonSet = props.minimalValue >= props.maximalValue || !!props.counterValue;

    return (
        <div className={style.counterWrapper}>
            <div className={style.inputWrapper}>
                <div>
                    <span>Min.</span>
                    <Input type={'number'}
                           onChange={onChangeMinimalValueHandler}
                           value={props.minimalValue}
                    />
                </div>
                <div>
                    <span>Max.</span>
                    <Input type={'number'}
                           onChange={onChangeMaximalValueHandler}
                           value={props.maximalValue}
                    />
                </div>
            </div>
            <div className={style.buttonsWrapper}>
                <Button buttonTitle={'SET'}
                        callback={setStartCounterValue}
                        disabled={disabledButtonSet}
                        className={style.bttn}
                />
                <Button buttonTitle={'CLEAR'}
                        callback={clearSettingsCounter}
                        className={style.bttn}
                />
            </div>
        </div>
    );
};
