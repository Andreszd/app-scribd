export default function CardComment({text, user}){
    return(
        <div className="comments__item">
            <p className="comments__text">{text}</p>
            <div className="comment-user">
                <img src={user.avatar} alt="profile-user" className="comment-user__img"/>
                <div className="comment-user__info">
                    <h2 className="comment-user__title">{user.name}</h2>
                    <p className="comment-user__text">{user.info}</p>
                </div>
            </div>
        </div>
    )
}