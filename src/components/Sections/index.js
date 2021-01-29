import SectionInfo from "./SectionInfo";
import {section1, section2} from './data'
import CardsInfo from "../CardsInfo";
export default function Sections(){
    return (
        <>
        <SectionInfo {...section1} modifier={'first'}/>
        <SectionInfo modifier={'second'}>
            <CardsInfo/>
        </SectionInfo>
        <SectionInfo {...section2} modifier={'three'}/>
        </>
    )
}