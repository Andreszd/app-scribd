export default function CardInfo({url, title, text, alt}){
    return (
        <div className="cards__item">
            <img src={url} alt={alt} className="cards__image"/>
            <h2 className="cards__title">{title}</h2>
            <p className="cards__text">{text}</p>
        </div>
    )
}