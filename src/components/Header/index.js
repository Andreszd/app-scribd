import Button from "../Button";
import ListLinks from "../ListLinks";
import Logo from "../Logo";

import './style.scss'
export default function Header(){
    return(
        <header className="header">
            <Logo/>
           <nav className="nav">
               <ListLinks/>
               <Button name="Log In"/>
            </nav> 
        </header>
    )
}