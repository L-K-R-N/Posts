import { IComment } from "../../models/IComment";




interface Props {
    comment: IComment;
}

export const CommentItem: React.FC<Props> = ({comment}) => {

    return (
        <div style={{marginTop: 15}}>
            <span>{comment.id}</span>
            <h4>{comment.name}</h4>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
        </div>
    )
}