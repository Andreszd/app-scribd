import { Redirect, Route } from "react-router-dom"

const authenticate = true
export function PublicRoute({component: Component, ...res}){
    return(
        !authenticate ? 
        <Route  component={Component} {...res}/>
        : <Redirect to="/home"/>
    )
}

export function PrivateRoute({component: Component, ...options}){
    return(
        authenticate ? 
        <Route {...options} component={Component} />
        : <Redirect to="/"/>
    )
}