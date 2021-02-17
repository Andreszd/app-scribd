import  { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileUpload } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import Search from "../Search";
import UserMenu from '../UserMenu';

import './style.scss'
export default function NavUser({}){

    const [openMenu, setOpenMenu] = useState(false)

    const handlerClick = evt =>{
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
        console.log('clicked')
    }    
    return (
       <nav className="nav-user">
           <Search/>
           <Button 
           text="Upload" 
           modifier="hidden-min-width" 
           icon={<FontAwesomeIcon icon={faFileUpload} className="icon"/>}/>
            <div className="profile-icon">
           <Button 
            onClick={handlerClick}
            icon={<FontAwesomeIcon icon={faUser}/>} 
            modifier="hidden-min-width"/>
            {
                openMenu ? <UserMenu/> : null 
            }
            </div>
       </nav> 
    )
}