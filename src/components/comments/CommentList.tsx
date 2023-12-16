import { IComment } from "../../models/IComment";
import { CommentItem } from "./CommentItem"



interface Props {
    comments: IComment[];
}

export const CommentList: React.FC<Props> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => 
                <CommentItem key={comment.id}
                    comment={comment}
                />
            )}
        </div>
    )
}