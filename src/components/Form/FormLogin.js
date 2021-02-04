import Form from ".";
import useForm from "../../hooks/useForm";
import Input from "../Input";

export default function FormLogin(){
    const bodyForm = {
        email:'', 
        password:''
    }
    const { handlerChange } = useForm(bodyForm)

    const handlerSubmit = evt =>{
        evt.preventDefault()
        console.log('hi world')
    }
    return(
        <Form onSubmit={handlerSubmit}>
            <h2 className="form__title">Hello !</h2> 
            <p className="form__text">Sign up to collect your Files.</p>
            <Input placeholder="example: correo@correo.com" 
            type="email"
            onKeywoard={handlerChange} 
            /> 
            <Input type="password" 
            onKeywoard={handlerChange} 
            placeholder="password"/> 
            <Input type="submit" value="Sign In"/> 
            <footer className="form__footer">
                <p className="form__text">Forgot password ? <a href="#" className="form__link">Reset</a></p>
                <p className="form__text">Dont have an account ? <a href="#" className="form__link">Sign Up</a></p>
            </footer>
        </Form>
    )
}