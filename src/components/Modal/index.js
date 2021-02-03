import ReactDOM from 'react-dom'
import './style.scss'
export function ModalLayout({setShowModal}){

    const handleClose = evt =>{
        setShowModal(false)
    }

    return(
        <div className="modal-container">
            <div className="modal">
                <button onClick={handleClose} className="modal__btn-closed"></button>
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
