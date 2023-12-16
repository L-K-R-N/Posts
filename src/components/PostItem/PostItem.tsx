
import React from "react";
import cl from './PostItem.module.css'
import { useNavigate} from 'react-router-dom'
import {MyButton} from "../UI/button/MyButton";
import { IPost } from "../../models/IPost";



interface Props {
  post: IPost;
  remove: (post: IPost) => void;
  number: number;
}

export const PostItem: React.FC<Props> = ({post, remove}) => {

  const navigate = useNavigate()

    return (
        <div className={cl.post}>
            <div className={cl.post__content}>
                <div className={cl.post__header}>
                    <h3>{post.title}</h3>
                </div>
                <div className={cl.post__main}>
                  <p className={cl.post__desc}>
                    {post.body}
                  </p>
                </div>
            </div>
            <div className={cl.post__btns}>
                <MyButton onClick={() => navigate(`posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
      </div>
    )
}
