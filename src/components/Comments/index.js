import CardComment from "./CardComment";
import { dataComment } from './data'

import './style.scss'
export default function Comments(){
    return (
        <div className="comments">
            {
                dataComment.map(comment =>
                    <CardComment {...comment}/>
                )
            }
        </div>
    )
}