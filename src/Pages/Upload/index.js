import DropZone from '../../components/DropZone'
import './style.scss'

export default function Upload({history}){
    return (
        <section className="file-upload">
            <h2 className="file-upload__title">Publish to the world</h2>
            <p className="file-upload__text">Presentations, research papers, legal documents, and more</p>
            <DropZone/>
            <span className="file-upload__info">Supported file Types: </span> 
        </section>
    )
}