import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './style.scss'
export default function Search(){
    return (
        <form className="search">
            <input type="text" className="search__input" placeholder="Search.."/>
            <button className="search__button">
               <FontAwesomeIcon icon={faSearch}/>
            </button>
        </form>
    )
}