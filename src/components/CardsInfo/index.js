import CardInfo from "./CardInfo";
import {cardInfo} from './data'

import './style.scss'
export default function Cards(){
    return (
        <div className="cards">
            {
                cardInfo.map((cardInfo, idx) => 
                    <CardInfo {...cardInfo} key={idx}/>
                )
            }
        </div>
    )
}