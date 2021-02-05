import { useState } from 'react';

import FormLogin from "./FormLogin"
import FormRegister from './FormRegister';


export default function FormLoginRegister(){
    const [actualForm, changeForm] = useState(true)

    return(
        <>
            {
                actualForm ?
                <FormLogin changeForm={changeForm}/>
                : 
                <FormRegister changeForm={changeForm}/>
            }
        </>
    )
} 