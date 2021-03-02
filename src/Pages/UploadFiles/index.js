import { useState } from 'react';

import DropZone from '../../components/DropZone'
import FormUploadFile from '../../components/Form/FormUploadFile';
import IconFilePreview from '../../components/IconFilePreview';


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
            <div className="file-upload-container-form">
                <span className="file-upload-container-form__preview">
                    <IconFilePreview/>
                </span>
                <div className="file-upload-container-form__fields">
                <FormUploadFile 
                file={refFile}
                changeFile={setRefFile} 
                /> 
                </div>
            </div>
        }
            </section>
        </>
    )
}