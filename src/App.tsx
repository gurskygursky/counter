import React, {useState} from 'react';
import './App.css';
// import {PrimitiveCounter} from "./PrimitiveCounter/PrimitiveCounter";
import {Counter} from './CounterWithSettings/Counter';
import {SettingsCounter} from './CounterWithSettings/SettingsCounter';

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);
    const [error, setError] = useState<string>('');

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
            {/*<PrimitiveCounter/>*/}
        </div>
    );
}
