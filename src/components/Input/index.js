
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faInbox, faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

export default function Input({placeholder, type, value, onKeywoard, name, error, label} = {}){

    const existError = ()=>{
        if (error){
            return error.count > 0
        }
        return false
    }

    switch(type){
        case 'submit':
            return <input placeholder={placeholder} 
            type={type} 
            name={name} 
            className="field-container__input-submit"
            value = {value}/>
        case 'password':
            return  (
                <>
                    <div className="field-container">
                        <input placeholder={placeholder} 
                        onChange = {onKeywoard}
                        name={name} 
                        type="password" 
                        className={existError() ? `field-container__input field-container__input--error`: 'field-container__input'}/>
                        <FontAwesomeIcon  icon={faKey} className='field-container__icon'/>
                    </div> 
                        {
                            existError() ? 
                                <span className="field-container__message-error">
                                    {error.message}
                                </span>
                            : null
                        }
                </>
            )
        case 'email':
            return  (
                <>
                    <div className='field-container'>
                        <input placeholder={placeholder} 
                        onChange = {onKeywoard}
                        name={name} 
                        type="email" 
                        className={existError() ? `field-container__input field-container__input--error`: 'field-container__input'}/>
                        <FontAwesomeIcon  icon={faInbox} 
                        className='field-container__icon'/>
                    </div>
                        {
                            existError()? 
                                <span className="field-container__message-error">
                                    {error.message}
                                </span>
                            : null
                        }
                </>    
            )
        case 'username':
            return (
                <>
                    <div className='field-container'>
                        <input placeholder={placeholder} 
                        onChange = {onKeywoard}
                        name={name} 
                        type="text" 
                        className={existError() ? `field-container__input field-container__input--error`: 'field-container__input'}/>
                        <FontAwesomeIcon  icon={faUser} 
                        className='field-container__icon'/>
                    </div>
                        {
                            existError()? 
                                <span className="field-container__message-error">
                                    {error.message}
                                </span>
                            : null
                        }
                </>
            )
        case 'search':
            return (
                <>
                    <div className='field-container'>
                        <FontAwesomeIcon  icon={faSearch} 
                        className='field-container__icon'/>
                        <input placeholder={placeholder} 
                        onChange = {onKeywoard}
                        name={name} 
                        type="text" 
                        className={existError() ? `field-container__input field-container__input--error`: 'field-container__input'}/>
                    </div>
                </>
            )
        case 'text':
            return (
                <>
                    {label && <label className="field-container__label">{label}</label>}
                    <div className="field-container">
                        <input type="text"
                            name={name}
                            className="field-container__input field-container__input--reset-padding"
                        />
                    </div>
                </>
            )
        case 'text-area':
            return (
                <>
                    {label && <label className="field-container__label">{label}</label>}
                    <textarea
                        className="field-container__input-area"
                        name={name}
                    />
                </>
            )
        default: 
            return(
                    <>  
                        <div className="field-container">
                            <FontAwesomeIcon  icon={faUser} 
                            className='field-container__icon'/>
                            <input placeholder={placeholder} 
                            onChange = {onKeywoard}
                            name={name} 
                            type={type} className="field-container__input"/>
                        </div>
                    </>
            )
    }
}