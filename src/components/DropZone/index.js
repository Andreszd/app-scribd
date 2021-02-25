import { useDropzone } from 'react-dropzone'

import './style.scss'
export default function DropZone(){
    const { getInputProps, getRootProps, open } = useDropzone({noClick: true})

    return(
        <div 
        {...getRootProps({className: 'dropzone'})} 
        className="dropzone">
            <input {...getInputProps()}/>
            <span>or drag & drop</span> 
            <button type="button" onClick={open}>
                Select Documents To Upload
            </button>
        </div>
    )
}