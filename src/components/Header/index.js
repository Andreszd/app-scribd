import useModal from "../../hooks/useModal";
import Button from "../Button";
import ListLinks from "../ListLinks";
import Logo from "../Logo";

import './style.scss'
export default function Header(){
    const  {setShowModal, RenderModal} = useModal()
    const handlerClick = evt =>{
        setShowModal(true)
    }
    return(
        <>
        <header className="header">
            <Logo/>
           <nav className="nav">
               <ListLinks/>
               <Button text="Log In" 
               modifier={'padding-none'}
               onClick={handlerClick}
               />
            </nav> 
        </header>
        <RenderModal/>
        </>
    )
}