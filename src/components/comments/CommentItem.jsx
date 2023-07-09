export const CommentItem = ({name, email, body}) => {

    return (
        <div style={{marginTop: 15}}>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    )
}