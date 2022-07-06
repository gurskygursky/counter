import React, {useState} from 'react';
import {CounterContainer} from './CounterContainer';
import {SettingsCounter} from './SettingsCounter';

export const Counter = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);

    return (
        <>
            <CounterContainer counterValue={counterValue}
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
        </>
    );
};