import './style.scss'

export default function Button({text, modifier, onClick, icon}){
    if(Array.isArray(modifier)){
        let nameClassBasic = 'button'
        modifier.forEach(element => nameClassBasic+=` button--${element}`)
        return (
            <button
                onClick={onClick}
                className={nameClassBasic} 
            >
                {icon}
                {text}
            </button>
        )
    }
    return (
        <>
        {
            modifier ? 
            <button  
                onClick={onClick}
                className={`button button--${modifier}`}>
            {icon}
            <span className="button__text">
                {text}
            </span>
            </button>:
            <button 
            onClick={onClick} className="button">
               {icon}
            <span className="button__text">
                {text}
            </span>

            </button>
        }
        </>
    )
}