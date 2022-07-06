import React from 'react';
import style from './Counter.module.css';

type PropsType = {
    counterValue: number;
}

export const DisplayCounter = (props: PropsType) => {
    return (
        <div className={style.outputWrapper}>{props.counterValue }</div>
    );
};
