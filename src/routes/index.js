import { Redirect } from "react-router-dom"

const authenticate = true
export function PublicRoute({component: Component, ...res}){
    return(
        !authenticate ? 
        <Component {...res}/>
        : <Redirect to="/home"/>
    )
}

export function PrivateRoute({component: Component, ...res}){
    return(
        authenticate ? 
        <Component {...res}/>
        : <Redirect to="/"/>
    )
}