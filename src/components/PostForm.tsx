import React, { useState } from "react";
import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import { IPost } from "../models/IPost";

interface Props {
  create: (post: IPost) => void
}

export const PostForm: React.FC<Props> = ({create}) => {

    const [post, setPost] = useState({title : '', body: ''})
    
    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)

        setPost({title : '', body: ''})
    
      }

    return (
        <form>
          <MyInput
          onChange={e => setPost({...post, title: e.target.value})} 
          value={post.title}
          type='text' 
          placeholder="Название"/>
          <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}

          type="text" 
          placeholder="Описание"/>
          <MyButton onClick={(e) => addNewPost(e)} >Создать пост</MyButton>
        </form>
    )
}
