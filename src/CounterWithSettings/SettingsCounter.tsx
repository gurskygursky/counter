import React from 'react';
import {SettingsCounterContainer} from './SettingsCounterContainer';

type PropsType = {
    setCounterValue: (counterValue: number) => void;
    minimalValue: number;
    setMinimalValue: (minimalValue: number) => void;
    maximalValue: number;
    setMaximalValue: (maximalValue: number) => void;
}
export const SettingsCounter = (props: PropsType) => {

    return (
        <SettingsCounterContainer setCounterValue={props.setCounterValue}
                                  minimalValue={props.minimalValue}
                                  setMinimalValue={props.setMinimalValue}
                                  maximalValue={props.maximalValue}
                                  setMaximalValue={props.setMaximalValue}
        />
    );
};
