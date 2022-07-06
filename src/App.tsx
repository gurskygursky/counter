import React, {useState} from 'react';
import './App.css';
// import {PrimitiveCounter} from "./PrimitiveCounter/PrimitiveCounter";
import {Counter} from './CounterWithSettings/Counter';
import {SettingsCounter} from './CounterWithSettings/SettingsCounter';

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);

    return (
        <div className="app-wrapper">
            <Counter counterValue={counterValue}
                     setCounterValue={setCounterValue}
                     minimalValue={minimalValue}
                     setMinimalValue={setMinimalValue}
                     maximalValue={maximalValue}
                     setMaximalValue={setMaximalValue}
            />
            <SettingsCounter counterValue={counterValue}
                             setCounterValue={setCounterValue}
                             minimalValue={minimalValue}
                             setMinimalValue={setMinimalValue}
                             maximalValue={maximalValue}
                             setMaximalValue={setMaximalValue}
            />
            {/*<PrimitiveCounter/>*/}
        </div>
    );
}
