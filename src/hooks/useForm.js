import { useState } from 'react';

export default function useForm(form){

    const [bodyForm, setBodyForm] = useState(form)

    const handlerChange = evt =>{
        setBodyForm({
            ...bodyForm,
            [evt.target.name] : evt.target.value
        })
    }

    const validatyFields = ()=>{
        const errors = {}
        const keys = Object.keys(bodyForm)
        console.log(Object.keys(bodyForm))
        console.log(Object.values(bodyForm))
        Object.values(bodyForm).forEach((prop, idx) => {
            if(keys[idx] === 'email') {
                console.log('validate email')
            }
        })
    }
    return { handlerChange, validatyFields }
}