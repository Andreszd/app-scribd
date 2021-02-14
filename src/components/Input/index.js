import  {  useState ,useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faInbox } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

export default function Input({placeholder, type, value, onKeywoard, name, error} = {}){

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
            name={type} 
            className="field-container__input-submit"
            value = {value}/>
        case 'password':
            return  (
                <>
                    <div className="field-container">
                        <input placeholder={placeholder} 
                        onChange = {onKeywoard}
                        name={type} 
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
                        name={type} 
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
                        name={type} 
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