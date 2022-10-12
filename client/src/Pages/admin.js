import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { cleanLogin, logOUT, DeleteUser, cleanImage, ModifyUser, cleanUser, cleanPassword, cleanName } from "../Redux/usersSlice";
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import Swal from 'sweetalert2';

function Admin() {
    const authorized = useSelector(state => state.Users.authorized)
    useEffect(() => {
        authorized ? ((navigate("/Admin")) || (dispatch(cleanLogin()))) : navigate("/")
    }, [authorized])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.Users.user)
    const modified = useSelector(state => state.Users.userModified)
    const Admin = useSelector(state => state.Users.user.Role)
    const [info, setinfo] = useState({ Email: user.Email }); console.log(info)
    const Modify = (e) => { setinfo({ ...info, [e.target.name]: e.target.value }) }
    const [selectedFile, setSelectedFile] = useState(); console.log(selectedFile)
    const data = new FormData();
    info.userName ? data.append('userName', info.userName) : console.log("nothing");
    data.append("Email", info.Email); data.append("Password", info.Password); data.append('Image', selectedFile)
    const [modify, setmodify] = useState(true)
     

    return (
        
        <div  class="bg-light" style={{ height: "100vh" }}>
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
                            <button class="btn btn-outline-primary" style={{position:"absolute",right:"260px",top:"7px"}} onClick={() => { navigate("/") }}>Home</button>
                                {Admin === "admin" ? <button style={{ marginRight: "0.4cm" }} onClick={() => navigate("/AdminOnly")} type="button" class="btn btn-outline-success">Admin Space</button> : null}
                                <button class="btn btn-outline-dark" onClick={() => { dispatch(logOUT()); navigate("/") }}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container p-4 mt-4">
                <div class="row justify-content-evenly mt-4">

                    <div class="col-lg-12 col-md-12 mt-4">
                        <div class="d-flex">
                            <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Your Profile info</h2>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Photo</th>
                                        <th scope="col">userName</th>
                                        <th scope="col">email</th>
                                        <th scope="col">role</th>
                                        {!modify && <th scope="col">Password Confirmation</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {modify && <td><img width="120" height="150" src={user.Image.path} /></td>}{!modify && <th> <input style={{ width: "8cm" }} name="Image" onChange={(e) => { setSelectedFile(e.target.files[0]); dispatch(cleanImage()) }} type="file" /></th>}
                                        {modify && <th >{user.userName}</th>}{!modify && <th><input onChange={(e) => { Modify(e) }} name="userName" defaultValue={user.userName} /></th>}
                                        {modify && <td>{user.Email}</td>}{!modify && <th><input name="Email" value={user.Email} /></th>}
                                        {modify && <td>{user.Role}</td>}{!modify && <th><input value={user.Role} /></th>}
                                        {!modify && <th><input placeholder='Required..' onChange={(e) => { Modify(e) }} name="Password" type="password" /></th>}

                                        {modify && <td><button class="btn btn-outline-success" onClick={(e) => { e.preventDefault(); setmodify(!modify) }}>Modify</button></td>}
                                        {modify && <td><button style={{ right: "650px" }} class="btn btn-outline-danger" onClick={(e) => { e.preventDefault(); dispatch(DeleteUser(user._id)); dispatch(logOUT()); navigate("/") }}>Delete</button></td>}

                                        {!modify && <td><button class="btn btn-outline-secondary" onClick={(e) => { e.preventDefault(); dispatch(ModifyUser({ data: data, userID: user._id })).then((err) => { err.type==='users/registerUser/fulfilled'?Swal.fire({ title: "Your account was successfully updated", icon: "success", showCloseButton: false,showConfirmButton:false,timer:3000,customClass: 'swal-height' }):err.payload[0].msg ? alert(`${err.payload[0].msg}`) : alert(`${err.payload}`) }); dispatch(cleanLogin()) }}>submit</button></td>}
                                        {!modify && <td><button style={{ right: "650px" }} class="btn btn-outline-primary" onClick={(e) => { e.preventDefault(); setmodify(!modify); setinfo({}); setSelectedFile(); dispatch(cleanLogin()) }}>Go back</button></td>}


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Admin