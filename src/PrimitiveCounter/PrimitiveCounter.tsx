import React from 'react';
import style from './PrimitiveCounter.module.css';

export const PrimitiveCounter = () => {
    return (
        <div className={style.counterWrapper}>
            <div className={style.outputWrapper}>{}</div>
            <div className={style.buttonsWrapper}>
                <button className={style.bttn}>INC</button>
                <button className={style.bttn}>RESET</button>
            </div>
        </div>
    );
};

