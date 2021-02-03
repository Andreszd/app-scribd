import ReactDOM from 'react-dom'

export function ModalLayout(){
    return(
        <div className="modal">
            hi world
        </div>
    )
}
export default function Modal(){
    return  ReactDOM.createPortal()
    
}
