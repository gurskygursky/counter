import React, {ChangeEvent, useState} from 'react';
import style from './SettingsCounter.module.css';

export const SettingsCounterContainer = () => {

    const [minimalValue, setMinimalValue] = useState<number>(0);
    const [maximalValue, setMaximalValue] = useState<number>(0);

    const setStartCounterValue = () => {
    }

    const onChangeMinimalValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinimalValue(+event.currentTarget.value);
    }
    const onChangeMaximalValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaximalValue(+event.currentTarget.value);
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.inputWrapper}>
                <div>
                    <span>Min.</span>
                    <input type={'number'}
                           value={minimalValue}
                           onChange={onChangeMinimalValueHandler}
                    />
                </div>
                <div>
                    <span>Max.</span>
                    <input type={'number'}
                           value={maximalValue}
                           onChange={onChangeMaximalValueHandler}
                    />
                </div>
            </div>
            <div className={style.buttonsWrapper}>
                <button className={style.bttn} onClick={setStartCounterValue}>SET</button>
            </div>
        </div>
    );
};
