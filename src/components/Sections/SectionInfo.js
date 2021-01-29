export default function SectionInfo({title, text, url, alt, modifier, children}){

    if (children) return <section className="section">
        {children}
        </section>
    return (
       <section className={`section section--${modifier}`}>
            <img src={url} alt={alt} className="section__image"/> 
            <h2 className="section__title">{title}</h2>
            {
                !Array.isArray(text) ? 
                    <p className="section__text">{text}</p>
                :
                text.map(text => 
                    <p className="section__text">{text}</p>    
                )
            }
            <button>See how Fylo works</button>
       </section> 
    )
}