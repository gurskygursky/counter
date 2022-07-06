import React, {useEffect, useState} from 'react';
import {CounterContainer} from './CounterContainer';
import {SettingsCounter} from './SettingsCounter';

export const Counter = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);

    useEffect(() => {
        const getStartCounterValue = localStorage.getItem('startCounterValue');
        const getEndCounterValue = localStorage.getItem('endCounterValue');

        if (getStartCounterValue) {
            setMinimalValue(JSON.parse(getStartCounterValue));
            setCounterValue(JSON.parse(getStartCounterValue));
        }
        if (getEndCounterValue) {
            setMaximalValue(JSON.parse(getEndCounterValue));
        }
    }, []);

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