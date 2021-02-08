import Link from '../Link'
import { url } from './urls'

import './style.scss'
export default function ListLinks(){
    return (
        <ul className="main-menu">
            {
                url.map((link, idx) => <Link key={ idx } {...link}/>)
            }
        </ul>
    )
}