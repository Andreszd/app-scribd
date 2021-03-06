import  { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileUpload, faBars } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import Search from "../Search";
import UserMenu from '../DropDownUser';
import {useHistory} from 'react-router-dom'

import './style.scss'
export default function NavUser({}){
    const history = useHistory()

    const [showMenu, setShowMenu] = useState(false)

    const showDropDown = evt =>{
        showMenu ? setShowMenu(false) : setShowMenu(true)
    }    
    return (
       <nav className="nav-user">
           <Search/>
           <Button
            modifier="hidden-view-desktop"
            modifier={['hidden-view-desktop','padding-left']}
            icon={<FontAwesomeIcon icon={faBars}/>}
           />
           <div className="nav-user__buttons">
           <Button 
           onClick={()=> history.push('/home/upload')}
           text="Upload" 
           modifier="hidden-min-width" 
           icon={<FontAwesomeIcon icon={faFileUpload} className="icon"/>}/>
            <div className="profile-icon">
           <Button 
            onClick={showDropDown}
            icon={<FontAwesomeIcon icon={faUser}/>} 
            />
            </div>
           </div>
            {
                showMenu ? <UserMenu/> : null 
            }
       </nav> 
    )
}