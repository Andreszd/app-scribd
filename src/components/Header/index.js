import useModal from "../../hooks/useModal";
import Button from "../Button";
import FormLoginRegister from '../Form/FormLoginRegister';
import ListLinks from "../ListLinks";
import Logo from "../Logo";

import './style.scss'
export default function Header({navigation: Navigation }){
    const  {setShowModal, RenderModal} = useModal()

    const handlerClick = evt =>{
        setShowModal(true)
    }
    return(
        <>
        <header className="header">
            <Logo/>
            {
                Navigation ? <Navigation/>:
                <nav className="nav">
                    <ListLinks/>
                    <Button text="Log In" 
                    modifier={'padding-none'}
                    onClick={handlerClick}
                    />
                </nav> 
            }
        </header>
        <RenderModal>
            <FormLoginRegister />
        </RenderModal>
        </>
    )
}