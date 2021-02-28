import { useCallback } from 'react';

import { useDropzone } from 'react-dropzone'
import Button from '../Button'

import './style.scss'
export default function DropZone({setIsFileAccepted, setRefFile}){
    
    const onDrop = useCallback((acceptedFiles)=>{
       console.log(acceptedFiles.length)  
       if ( acceptedFiles.length === 1 ) setIsFileAccepted(true)
    })

    const onDropRejected = useCallback((deniedFile)=>{
       console.log(deniedFile)  
    })

    const { getInputProps, getRootProps, open } = 
    useDropzone({noClick: true, 
        onDrop,
        accept: "application/pdf",
        onDropRejected,
        maxFiles: 1
    })

    return(
        <div 
        {...getRootProps({className: 'dropzone'})} 
        className="dropzone">
            <input {...getInputProps()}/>
            <Button text="Select Documents To Upload" 
            onClick={open}
            modifier={['color-cyan', 'border-radius-10']}
            />
            <span className="dropzone__text">or drag & drop</span> 
        </div>
    )
}