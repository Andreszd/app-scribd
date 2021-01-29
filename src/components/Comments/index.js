import CardComment from "./CardComment";
import { dataComment } from './data'

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