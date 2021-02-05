import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faInbox } from '@fortawesome/free-solid-svg-icons'

export default function Input({placeholder, type, value, onKeywoard, name} = {}){

    switch(type){
        case 'submit':
            return <input placeholder={placeholder} 
            type={type} 
            name={type} 
            className="field-container__input-submit"
            value = {value}/>
        case 'password':
            return  <div className="field-container">
                    <input placeholder={placeholder} 
                    onChange = {onKeywoard}
                    name={type} 
                    type={type} 
                    className="field-container__input field-container__input--error"/>
                <FontAwesomeIcon  icon={faKey} className='field-container__icon'/>
            </div> 
        case 'email':
            return  <div className="field-container">
                    <input placeholder={placeholder} 
                    onChange = {onKeywoard}
                    name={type} 
                    type={type} className="field-container__input"/>
                    <FontAwesomeIcon  icon={faInbox} 
                    className='field-container__icon'/>
                    </div>
        default: 
            return  <div className="field-container">
                    <FontAwesomeIcon  icon={faUser} 
                    className='field-container__icon'/>
                    <input placeholder={placeholder} 
                    onChange = {onKeywoard}
                    name={name} 
                    type={type} className="field-container__input"/>
                    </div>
    }
}