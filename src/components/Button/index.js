import './style.scss'

export default function Button({text, modifier, onClick, icon}){
    if(Array.isArray(modifier)){
        let nameClassBasic = 'button'
        modifier.forEach(element => nameClassBasic+=` button--${element}`)
        return (
            <button
                className={nameClassBasic} 
            >
                {icon}
                {text}
            </button>
        )
    }
    if (!modifier) return <button className="button">
        {icon}
        {text}
    </button>

    return (
        <button 
        onClick={onClick}
        className={`button button--${modifier}`}>
            {icon}
            {text}
        </button>
    )
}