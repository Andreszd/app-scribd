import SectionInfo from "./SectionInfo";
import {section1, section2} from './data'
import CardsInfo from "../CardsInfo";
import Comments from '../Comments'

import './style.scss'
export default function Sections(){
    return (
        <>
        <SectionInfo {...section1} modifier={'first'}/>

        <SectionInfo modifier={'second'}>
            <CardsInfo/>
        </SectionInfo>

        <SectionInfo {...section2} modifier={'three'}/>

        <SectionInfo modifier={'four'}>
            <Comments />
        </SectionInfo>
        </>
    )
}