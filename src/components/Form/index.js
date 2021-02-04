import Input from "../Input";

import './style.scss'

export default function Form({children}){
    return (
        <form className = "form"> 
            {children}
        </form>
    )
}