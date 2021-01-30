import './style.scss'

export default function Button({name, modifier}){

    if (!modifier) return <button className="button">{name}</button>

    return (
        <button className={`button button--${modifier}`}>{name}</button>
    )
}