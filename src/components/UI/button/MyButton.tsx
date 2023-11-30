import React from "react";
import classes from "./MyButton.module.css";


interface Props {
    children: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const MyButton: React.FC<Props> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.myBtn} >
            {children}
        </button>
    )
}
