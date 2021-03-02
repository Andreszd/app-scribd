import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default function IconFilePreview({refFile = {}}){
    return(
        <FontAwesomeIcon icon={faFilePdf} className="file-upload-container-form__icon"/>
    )
}