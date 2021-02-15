import Header from "../components/Header"
import NavUser from "../components/NavUser"

export default function Home(){

    return (
        <>
        <Header navigation={NavUser}/>
        <h1>Hi user...!</h1>
        </>
    )
}