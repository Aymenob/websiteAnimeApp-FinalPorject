
import React from 'react'
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {  logOUT, DeleteUser,getUsers } from "../Redux/usersSlice";
import { useDispatch, useSelector } from 'react-redux';
import AdminOnlyProfile from '../adminOnlyProfile';
import '../App.css';
const AdminOnly = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users=useSelector(state=>state.Users.users);console.log(users)
    useEffect(() => {
     dispatch(getUsers())
    }, [])
    
    return (
        <div class="bg-light" style={{ height: "100vh" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div class="mx-4">
                            <button style={{marginRight:"0.4cm"}} onClick={()=>navigate("/Admin")} type="button" class="btn btn-outline-success">Go back</button>

                                <button class="btn btn-outline-primary" onClick={() => { dispatch(logOUT()); navigate("/") }}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container p-4 mt-4">
                <div class="row justify-content-evenly mt-4">

                    <div class="col-lg-12 col-md-12 mt-4">
                        <div class="d-flex">
                            <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
                        </div>
                   
                        {users.map(e=><AdminOnlyProfile userName={e.userName} Email={e.Email} Role={e.Role} Image={e.Image.path} userID={e._id} userRole={e.Role}/>)}
                        
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default AdminOnly