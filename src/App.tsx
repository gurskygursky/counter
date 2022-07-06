import React, {useEffect, useState} from 'react';
import './App.css';
// import {PrimitiveCounter} from "./PrimitiveCounter/PrimitiveCounter";
import {Counter} from './CounterWithSettings/Counter';
import {SettingsCounter} from './CounterWithSettings/SettingsCounter';

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);
    const [error, setError] = useState<string>('');

    // const [value, setValue] = useState<number>(0);
    // useEffect(() => {
    //     const getValue = localStorage.getItem('counterValue');
    //     if (getValue) {
    //         const newValue = JSON.parse(getValue);
    //         setValue(newValue);
    //     }
    // }, []);
    // useEffect(() => {
    //     // console.log('1111')
    //     // return () => (console.log('sss'))
    //     localStorage.setItem('counterValue', JSON.stringify(value));
    // }, [value]);

    // useEffect(() => {
    //     const getValue = localStorage.getItem('counterValue');
    //     if (getValue) {
    //         const newValue = JSON.parse(getValue);
    //         setValue(newValue);
    //     }
    // }, []);

    useEffect(() => {
        const getStartCounterValue = localStorage.getItem('startCounterValue');
        if (getStartCounterValue) {
            setMinimalValue(JSON.parse(getStartCounterValue));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('startCounterValue', JSON.stringify(minimalValue));
    }, [minimalValue]);
    useEffect(() => {
        const getEndCounterValue = localStorage.getItem('endCounterValue');
        if (getEndCounterValue) {
            setMaximalValue(JSON.parse(getEndCounterValue));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('endCounterValue', JSON.stringify(maximalValue));
    }, [maximalValue]);

    return (
        <div className="app-wrapper">
            {/*<div>{value}</div>*/}
            {/*<button onClick={() => {setValue(value + 1)}}>+</button>*/}
            <Counter counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     minimalValue={minimalValue}
                     setMinimalValue={setMinimalValue}
                     maximalValue={maximalValue}
                     setMaximalValue={setMaximalValue}
                     error={error}
            />
            <SettingsCounter counterValue={counterValue}
                             setCounterValue={setCounterValue}
                             minimalValue={minimalValue}
                             setMinimalValue={setMinimalValue}
                             maximalValue={maximalValue}
                             setMaximalValue={setMaximalValue}
                             error={error}
                             setError={setError}
            />
            {/*<PrimitiveCounter/>*/}
        </div>
    );
}
