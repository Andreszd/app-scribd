import  { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileUpload } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import Search from "../Search";
import UserMenu from '../DropDownUser';
import {useHistory} from 'react-router-dom'

import './style.scss'
export default function NavUser({}){
    const history = useHistory()

    const [openMenu, setOpenMenu] = useState(false)

    const showDropDown = evt =>{
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }    
    return (
       <nav className="nav-user">
           <Search/>
           <Button 
           onClick={()=> history.push('/home/upload')}
           text="Upload" 
           modifier="hidden-min-width" 
           icon={<FontAwesomeIcon icon={faFileUpload} className="icon"/>}/>
            <div className="profile-icon">
           <Button 
            onClick={showDropDown}
            icon={<FontAwesomeIcon icon={faUser}/>} 
            modifier="hidden-min-width"/>
            {
                openMenu ? <UserMenu/> : null 
            }
            </div>
       </nav> 
    )
}