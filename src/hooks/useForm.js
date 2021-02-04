import { useState } from 'react';

export default function useForm(form){

    const [bodyForm, setBodyForm] = useState(form)

    const handlerChange = evt =>{
        console.log(evt.target.value)
        setBodyForm({
            ...bodyForm,
            [evt.target.name] : evt.target.value
        })
    }
    return { handlerChange }
}