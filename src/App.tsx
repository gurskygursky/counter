import React from 'react';
import './App.css';
// import {PrimitiveCounter} from "./PrimitiveCounter/PrimitiveCounter";
import {Counter} from './CounterWithSettings/Counter';

export const App = () => {
    return (
        <div className='app-wrapper'>
            <Counter/>
            {/*<PrimitiveCounter/>*/}
        </div>
    );
}
