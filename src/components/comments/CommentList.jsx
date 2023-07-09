import { CommentItem } from "./CommentItem"

export const CommentList = ({comments}) => {
    return (
        <div>
            {comments.map(comment => 
                <CommentItem 
                    name={comment.name} 
                    email={comment.email} 
                    body={comment.body}
                    key={comment.id}
                />
            )}
        </div>
    )
}