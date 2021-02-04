import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faBox, faInbox } from '@fortawesome/free-solid-svg-icons'

export default function Input({placeholder, type, value, onKeywoard} = {}){

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
                    className="field-container__input"/>
                <FontAwesomeIcon  icon={faKey} className='field-container__icon'/>
            </div> 
        case 'email':
            return  <div className="field-container">
                    <FontAwesomeIcon  icon={faInbox} 
                    className='field-container__icon'/>
                    <input placeholder={placeholder} 
                    onChange = {onKeywoard}
                    name={type} 
                    type={type} className="field-container__input"/>
                    </div>
        default: 
            return null;
    }
}