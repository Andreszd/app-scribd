import React, { useState } from 'react';
import Modal from '../components/Modal';

export default function useModal(){
    const [showModal, setShowModal] = useState(false)

    const RenderModal =({children})=>{
        return (
            showModal ? 
            <Modal setShowModal={setShowModal} children = {children}/>
            : null
        )
    }
    return {RenderModal, setShowModal}
}