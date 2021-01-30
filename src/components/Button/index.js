import './style.scss'

export default function Button({text, modifier}){

    if (!modifier) return <button className="button">{text}</button>

    return (
        <button className={`button button--${modifier}`}>{text}</button>
    )
}