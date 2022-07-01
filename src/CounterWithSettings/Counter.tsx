import React from 'react';
import {CounterContainer} from './CounterContainer';
import {SettingsCounter} from './SettingsCounter';

export const Counter = () => {
    return (
        <>
            <CounterContainer/>
            <SettingsCounter/>
        </>
    );
};