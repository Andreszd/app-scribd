import { Link } from 'react-router-dom'
import { links } from './links'
import './style.scss'
export default function UserMenu(){

    return(
        <div className="menu-user">
            <h2 className="menu-user__title">Hi User !</h2>
            <ul className="menu-links">
                {links.map(link => 
                <li className="menu-links__item" key={link.id}>
                    <Link className="menu-links__link"
                        to={link.path}
                    >{link.name}</Link>
                </li>
                )
                }
            </ul>
        </div>
    )
}