import Button from "../Button";
import ListLinks from "../ListLinks";
import Logo from "../Logo";

import './style.scss'
export default function Header(){
    const handlerClick = evt =>{
        console.log('clicked')
    }
    return(
        <header className="header">
            <Logo/>
           <nav className="nav">
               <ListLinks/>
               <Button text="Log In" 
               modifier={'padding-none'}
               onClick={handlerClick}
               />
            </nav> 
        </header>
    )
}