import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IPost } from "../models/IPost";
import {PostItem} from "./PostItem/PostItem";

interface Props {
    posts: IPost[];
    title: string;
    remove: (post: IPost) => void
}

export const PostList: React.FC<Props> = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
        <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }

    return (
        
    <div>
        <h2 style={{textAlign: "center"}}>
            {title}
        </h2>
       <TransitionGroup>
       {posts.map((post, index) => 
        <CSSTransition
            key={post.id}
            timeout={300}
            classNames="post"
        >
            <PostItem remove={remove} number={index + 1} post={post}/>
        </CSSTransition>
        )}
       </TransitionGroup>
    </div>
    )
}
