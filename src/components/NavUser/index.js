import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileUpload } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import Search from "../Search";

import './style.scss'
export default function NavUser({}){
    return (
       <nav className="nav-user">
           <Search/>
           <Button text="Upload" modifier="hidden-min-width" icon={<FontAwesomeIcon icon={faFileUpload} className="icon"/>}/>
           <Button icon={<FontAwesomeIcon icon={faUser}/>} modifier="hidden-min-width"/>
       </nav> 
    )
}