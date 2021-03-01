import { useState } from 'react';

import DropZone from '../../components/DropZone'
import FormUploadFile from '../../components/Form/FormUploadFile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

export default function Upload({history}){
    const [refFile, setRefFile] = useState(null)

    return (
        <>
            <section className="file-upload">
        {
            !refFile ? 
            <>
                <h2 className="file-upload__title">Publish to the world</h2>
                <p className="file-upload__text">Presentations, research papers, legal documents, and more</p>
                <DropZone 
                setRefFile={setRefFile}
                />
                <span className="file-upload__info">Supported file Types: </span> 
            </>
            : 
            <div className="file-upload-form">
                <span className="file-upload-form__preview">
                   < FontAwesomeIcon icon={faFile}/>
                </span>
                <FormUploadFile 
                file={refFile}
                changeFile={setRefFile} 
                /> 
            </div>
        }
            </section>
        </>
    )
}