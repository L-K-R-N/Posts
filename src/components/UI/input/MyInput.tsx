import React, { ChangeEvent } from "react";
import classes from './MyInput.module.css'



interface Props {
    placeholder: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}


export const MyInput: React.FC<Props> = ({...props}) => {

    return (
        <input className={classes.myInput} {...props} type="text" />

    )
}
