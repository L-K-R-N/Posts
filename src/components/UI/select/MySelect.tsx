import React from "react";
import { IOption } from "../../../models/IOption";



interface Props {
    options: IOption[];
    defaultOption: string;
    value: string ;
    onChange: (value: string) => void; 
    title: string;
}

export const MySelect: React.FC<Props> = ({options, defaultOption, value, onChange, title}) => {

    return (
        <select 
        
            title={title}
         value={value}
         onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}
