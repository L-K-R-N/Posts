import React, { ReactNode } from "react";
import classes from "./MyModal.module.css";


interface Props {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void 
}

export const MyModal: React.FC<Props> = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
