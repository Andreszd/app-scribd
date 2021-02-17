import Header from "../components/Header"
import NavUser from "../components/NavUser"
import Upload from "./Upload"
import { PrivateRoute } from "../routes"

export default function Home(){

    return (
        <>
        <Header navigation={NavUser}/>
        <PrivateRoute component={Upload} path="/home/upload" />
        </>
    )
}