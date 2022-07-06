import React from 'react';
import style from './Counter.module.css';

type PropsType = {
    counterValue: number;
    error: string;
}

export const DisplayCounter = (props: PropsType) => {
    return (
        <div className={style.outputWrapper}>{props.error ? props.error : props.counterValue}</div>
    );
};
