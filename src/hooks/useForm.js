import { useState } from 'react';

export default function useForm(form){

    const [bodyForm, setBodyForm] = useState(form)

    const handlerChange = evt =>{
        setBodyForm({
            ...bodyForm,
            [evt.target.name] : evt.target.value
        })
    }
    const validateEmail =(value)=>{
        let error = {}
        error.type = 'email'
        error.count = 0
        if( value.trim().length === 0) {
            error.message = 'Field not be empty'
            error.count+=1
        }
        return error
    }
    const validatePassword = value =>{
        let error = {}
        error.type = 'password'
        error.count = 0
        if( value.trim().length === 0){
            error.message = 'Field not be empty' 
            error.count+=1
        }
        return error
    }
    const validateField = (typeField = '', content, errors = [])=>{
        if(typeField === 'email') {
            errors.push(validateEmail(content))
        }
        if(typeField === 'password'){
            errors.push(validatePassword(content))
        } 

    }
    const validateFields = ()=>{
        const errors = [] 
        const keys = Object.keys(bodyForm)
        Object.values(bodyForm).forEach((value, idx) => {
            validateField(keys[idx], value, errors)
        })
        return errors
    }
    return { handlerChange, validateFields }
}