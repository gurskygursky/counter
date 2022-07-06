import React, {ChangeEvent} from 'react';

export type InputType = {
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: number
}


export const Input = (props: InputType) => {

    return (
        <input style={{textAlign: 'center'}}
               onChange={props.onChange}
               type={'number'}
               value={props.value}

        >
        </input>
    );
}
