import logo from '../../assets/images/logo.svg' 
import { useHistory } from 'react-router-dom'

import './style.scss'
export default function Logo(){
    const history = useHistory()
    return <img src={logo} 
    alt="logo" 
    onClick={()=> history.push('/')}
    className="logo"/>
}