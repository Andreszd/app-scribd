import Form from ".";
import useForm from "../../hooks/useForm";
import Input from "../Input";

export default function FormRegister({changeForm}){

    const bodyForm = {
        username:'',
        email:'', 
        password:''
    }
    const { handlerChange, validatyFields } = useForm(bodyForm)

    const handlerSubmit = evt =>{
        evt.preventDefault()
        validatyFields()
    }
    const handlerClick = evt=>{
        evt.preventDefault()
        changeForm(true)
    }
    return (
        <Form onSubmit={handlerSubmit}>
            <h2 className="form__title">Join Documents</h2> 
            <p className="form__text">Sign up to collect your Files.</p>
            <Input placeholder="Full Name" 
            name="username"
            type="text"
            icon="user"
            onKeywoard={handlerChange} 
            /> 
            <Input placeholder="example: correo@correo.com" 
            type="email"
            onKeywoard={handlerChange} 
            /> 
            <Input type="password" 
            onKeywoard={handlerChange} 
            placeholder="Password"/> 
            <Input type="submit" value="Sign In"/> 
            <footer className="form__footer">
                <p className="form__text">Already registered ? 
                <button className="form__button"
                    onClick={handlerClick}
                >Sign in</button></p>
            </footer>
        </Form>
    )
}