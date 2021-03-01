import { useState } from 'react';

export default function useForm(form, request){

    const [bodyForm, setBodyForm] = useState(form)
    const [errors, setErrors] = useState({})


    const existErrors = (value = {})=>{
        return Object.values(value).filter(error => error.count > 0).length > 0
    }

    const handlerSubmit = evt =>{
        evt.preventDefault()
        const errors = validateFields()
        setErrors(errors)
        if(!existErrors(errors)){
            request(bodyForm)
        }
    }

    const handlerChange = evt =>{
        console.log(evt.target.value)
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
    const validateUsername = value =>{
        let error = {}
        error.type = 'username'
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
        if(typeField === 'username'){
            error = validateUsername(content) 
            errors['username'] = error
        }

    }
    const hasAnyError = (errors = {}) =>{
        const listErrors = Object.values(errors).filter(error => error.count > 0)
        return listErrors.length > 0
    }
    const validateFields = ()=>{
        const errors = {} 
        const keys = Object.keys(bodyForm)
        Object.values(bodyForm).forEach((value, idx) => {
            validateField(keys[idx], value, errors)
        })
        return errors
    }
    return { handlerChange, validateFields, errors, handlerSubmit }
}