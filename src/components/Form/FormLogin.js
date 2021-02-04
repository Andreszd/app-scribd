import Form from ".";
import Input from "../Input";


export default function FormLogin(){
    return(
        <Form>
            <h2 className="form__title">Log In</h2> 
            <p className="form__text">Sign up to collect your Files.</p>
            <Input placeholder="example: correo@correo.com" type="email"/> 
            <Input type="password" placeholder="password"/> 
            <Input type="submit"/> 
            <footer className="form__footer">
                <p className="form__text">Forgot password ? <a href="#" className="form__link">Reset</a></p>
                <p className="form__text">Dont have an account ? <a href="#" className="form__link">Sign Up</a></p>
            </footer>
        </Form>
    )
}