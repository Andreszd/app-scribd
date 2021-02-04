import Form from ".";
import useForm from "../../hooks/useForm";
import useModal from "../../hooks/useModal";
import Input from "../Input";
import FormRegister from "./FormRegister";

export default function FormLogin({ }){
    const bodyForm = {
        email:'', 
        password:''
    }
    const { handlerChange, validatyFields } = useForm(bodyForm)

    const handlerSubmit = evt =>{
        evt.preventDefault()
        validatyFields()
    }

    const handlerClick = evt =>{
        evt.preventDefault()
        console.log('ola')
    }
    return(
        <>
        <Form onSubmit={handlerSubmit}>
            <h2 className="form__title">Hello !</h2> 
            <p className="form__text">Sign into your account here.</p>
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
                <p className="form__text">Dont have an account ? 
                <button className="form__button"
                    onClick={handlerClick}
                >Sign Up</button></p>
            </footer>
        </Form>
        <RenderModal>
            <FormRegister/>
        </RenderModal>
        </>
    )
}