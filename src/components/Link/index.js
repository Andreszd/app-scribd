export default function Link({ name, path }){
    return(
        <li className="main-menu__item">
            <a href={path} className="main-menu__link"> {name} </a>
        </li>
    ) 
}