import { useParams } from "react-router-dom"
import { Loader } from "../components/UI/loader/Loader"
import { CommentList } from "../components/comments/CommentList"
import { useGetCommentsQuery, useGetPostByIdQuery } from "../services/PostApi"

export const PostIdPage: React.FC = () => {

    const params = useParams()
    const {data: postData, isLoading: isPostLoading} = useGetPostByIdQuery(Number(params?.id))
    const {data: commentsData, isLoading: isCommentsLoading} = useGetCommentsQuery(Number(params?.id))
    // const [isLoading, fetchPostById, postError] = useFetching(async (id) => {
    //     const response = 
    //     setPost(response.data)
    // })
    // const [isCommentsLoading, fetchComments, commentsError] = useFetching(async (id) => {
    //     const response = await PostService.getCommentsByPostId(id)
    //     setComments(response.data)
    // })
    // useEffect(() => {
    //     console.log(params)
    //     fetchPostById(params.id)
    //     fetchComments(params.id)
    // }, [])
    return (
        <div>
            <h1>
                Вы перешли на страницу поста с id: {params.id}
            </h1>
            {isPostLoading
                ? <Loader/>
                : <div>
                    <h3>{postData?.id}.{postData?.title}</h3>
                    <p>{postData?.body} </p>
                </div>
            }
            <h1>Комментарии</h1>
            {isCommentsLoading 
                ? <Loader/>
                : <CommentList comments={commentsData ? commentsData : []}/>
            }
        </div>
    ) 
}