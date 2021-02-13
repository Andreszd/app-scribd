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
    const validateField = (typeField = '', content, errors = {})=>{
        let error = null 
        if(typeField === 'email') {
            error = validateEmail(content)
            //errors.push(validateEmail(content))
            errors['email'] = error
        }
        if(typeField === 'password'){
            error = validatePassword(content)
            //errors.push(validatePassword(content))
            errors['password'] = error
        } 

    }
    const validateFields = ()=>{
        const errors = {} 
        const keys = Object.keys(bodyForm)
        Object.values(bodyForm).forEach((value, idx) => {
            validateField(keys[idx], value, errors)
        })
        return errors
    }
    return { handlerChange, validateFields }
}