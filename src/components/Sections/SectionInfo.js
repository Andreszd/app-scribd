import Button from "../Button"

export default function SectionInfo({title, text, urlImg, alt, modifier, children}){

    if (children) return <section className={`section section--${modifier}`}>
        {children}
        </section>
    return (
       <section className={`section section--${modifier}`}>
            <img src={urlImg} alt={alt} className="section__image"/> 
            <div className="section-container">
                <h2 className="section__title">{title}</h2>
                {
                    !Array.isArray(text) ? 
                        <p className="section__text">{text}</p>
                    :
                    text.map((text, idx) => 
                        <p className="section__text" key={idx}>{text}</p>    
                    )
                }
                <Button text={'Get Started'} modifier={'color-cyan'}/>
            </div>
       </section> 
    )
}
