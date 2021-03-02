import Header from "../../components/Header"
import NavUser from "../../components/NavUser"
import UploadFiles from "../UploadFiles"
import { PrivateRoute } from "../../routes"

export default function Home(){

    return (
        <>
        <Header navigation={NavUser}/>
        <PrivateRoute component={UploadFiles} path="/home/upload" />
        </>
    )
}