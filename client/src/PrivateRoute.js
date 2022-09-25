import { Navigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
    const Role = JSON.parse(localStorage.getItem('user'))
    return Role.Role==="admin"? children :<Navigate  to="/Admin"/>
}