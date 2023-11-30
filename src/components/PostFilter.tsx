import React from "react";
import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/select/MySelect";
import { IFilter } from "../models/IFilter";




interface Props {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

export const PostFilter: React.FC<Props> = ({filter, setFilter}) => {
  
    return (
        <div>
        <MyInput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        />
      
        <MySelect
          title={'Сортировка'}
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultOption="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
            // {value: 'id', name: 'По индексу'}
          ]}
          />
              
              
        </div>
    )
}
