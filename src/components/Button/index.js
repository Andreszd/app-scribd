import './style.scss'

export default function Button({text, modifier, onClick}){
    if(Array.isArray(modifier)){
        let nameClassBasic = 'button'
        modifier.forEach(element => nameClassBasic+=` button--${element}`)
        return (
            <button
                className={nameClassBasic} 
            >{text}</button>
        )
    }
    if (!modifier) return <button className="button">{text}</button>

    return (
        <button 
        onClick={onClick}
        className={`button button--${modifier}`}>{text}</button>
    )
}