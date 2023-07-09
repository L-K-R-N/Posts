import { useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching"
import PostService from "../API/PostService"
import { useEffect, useState } from "react"
import { Loader } from "../components/UI/loader/Loader"
import { CommentItem } from "../components/comments/CommentItem"
import { CommentList } from "../components/comments/CommentList"

export const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, fetchPostById, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [isCommentsLoading, fetchComments, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>
                Вы перешли на страницу поста с id: {params.id}
            </h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <h3>{post.id}.{post.title}</h3>
                    <p>{post.body} </p>
                </div>
            }
            <h1>Комментарии</h1>
            {isLoading
                ? <Loader/>
                : <CommentList comments={comments}/>
            }
        </div>
    )
}