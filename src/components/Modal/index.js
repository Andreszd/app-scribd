import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.scss'
export function ModalLayout({setShowModal, children}){

    const handleClose = evt =>{
        setShowModal(false)
    }

    return(
        <div className="modal-container">
            <div className="modal">
                <button onClick={handleClose} className="modal__btn-closed">
                    <FontAwesomeIcon icon = {faTimes}/>
                </button>
                {children}
            </div>
        </div>
    )
}
export default function Modal({children, setShowModal}){
    return  ReactDOM.createPortal(
        <ModalLayout setShowModal={setShowModal}>
            {children}
        </ModalLayout>
        , document.getElementById('modal'))
    
}
