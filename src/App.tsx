import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './CounterWithSettings/Counter';
import {SettingsCounter} from './CounterWithSettings/SettingsCounter';

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);
    const [error, setError] = useState<string>('');

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
        </div>
    );
}
