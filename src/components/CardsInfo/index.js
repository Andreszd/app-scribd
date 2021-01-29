import CardInfo from "./CardInfo";
import data from './data'

export default function Cards(){
    return (
        <div className="cards">
            {
                data.map(cardInfo => 
                    <CardInfo {...cardInfo}/>
                )
            }
        </div>
    )
}