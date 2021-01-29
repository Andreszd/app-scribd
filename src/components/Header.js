import Logo from "./Logo";

export default function Header(){
    return(
        <header className="header">
            <Logo/>
           <nav className="nav">
               <ul className="main-menu">
                   <li className="main-menu__item">
                       <a href="" className="main-menu__link">Features</a></li>
                   <li className="main-menu__item">
                       <a href="" className="main-menu__link">Team</a></li>
                   <li className="main-menu__item">
                       <a href="" className="main-menu__link">Sign In</a></li>
               </ul>
            </nav> 
        </header>
    )
}