import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { cleanLogin, cleanPassword, registerUser,cleanName,cleanEmail,cleanImage } from '../Redux/usersSlice'
import '../App.css';
function Register() {

     const Dispatch=useDispatch()
    const Navigate=useNavigate()
    const [selectedFile, setSelectedFile] = useState()
    const  [newUser, setnewUser] = useState({userName:"",Email:"",Password:"",Image:{path: "",public_id: ""}})
    const data = new FormData();
    data.append('userName',newUser.userName);
    data.append("Email",newUser.Email)
    data.append("Password",newUser.Password)
    data.append('Image', selectedFile);
    const authorized=useSelector(state=>state.Users.authorized)
    const errorsPassword=useSelector(state=>state.Users.errorsPassword)
    const errorsUserName=useSelector(state=>state.Users.errorsUserName)
    const errorsEmail=useSelector(state=>state.Users.errorsEmail)
    const errorsImage=useSelector(state=>state.Users.errorsImage);console.log(newUser)
    useEffect(() => {
        authorized?((Navigate("/Admin"))||(Dispatch(cleanLogin()))):Navigate("/Register")||(Dispatch(cleanLogin()))
       }, [authorized])
    return (

        <div class="bg-light" style={{height:"100vh"}}>
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
                          
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container p-4 mt-4">
                <div class="row justify-content-evenly mt-4">

                    <div class="col-lg-6 col-md-12 mt-4">
                        <div class="d-flex">
                            <i class="fa-solid fa-right-to-bracket fs-1 mx-2"></i>
                            <h2>Register</h2>
                        </div>
                        <div class="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor:"white"}}>
                            <form>
                                <div class=" mb-3">
                                    <label class="form-label">Name</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-user"></i></span>
                                        <input  name="userName" value={newUser.userName} onChange={(e)=>{setnewUser({...newUser,[e.target.name]:e.target.value});Dispatch(cleanName())}} type="text" class="form-control" />
                                    </div>
                                    {errorsUserName?<p class="errors">{errorsUserName.msg||errorsUserName}</p>:null}
                                </div>
                                <div class=" mb-3">
                                    <label   class="form-label">Email address</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-at"></i></span>
                                        <input  name="Email" onChange={(e)=>{setnewUser({...newUser,[e.target.name]:e.target.value});Dispatch(cleanEmail())}} type="text" class="form-control" />
                                    </div>
                                    {errorsEmail?<p class="errors">{errorsEmail.msg||errorsEmail}</p>:null}
                                </div>
                                <div class="mb-3">
                                    <label  class="form-label">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-key"></i></span>
                                        <input  name="Password"  onChange={(e)=>{setnewUser({...newUser,[e.target.name]:e.target.value});Dispatch(cleanPassword())}} type="password" class="form-control" />
                                    </div>
                                    {errorsPassword?<p class="errors">{errorsPassword.msg||errorsPassword}</p>:null}
                                </div>
                                <div class="mb-3">
                                    <label  class="form-label">Image</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-image"></i></span>
                                        <input  name="Image"  onChange={(e)=>{setSelectedFile(e.target.files[0]);Dispatch(cleanImage())}} type="file" class="form-control" />
                                    </div>
                                    <span style={{color:"grey"}}  class="form-label">Acceptable formats:&nbsp;&nbsp;&nbsp;jpg-jpeg-png.</span>
                                    {errorsImage?<p class="errors">{errorsImage.msg||errorsImage}</p>:null}
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="submit" onClick={(e)=>{e.preventDefault();Dispatch(registerUser(data));Dispatch(cleanLogin())}} class="btn btn-outline-primary">Save <i
                                        class="fa-solid fa-floppy-disk"></i></button>
                                        <button class="btn btn-outline-danger" onClick={(e)=>{e.preventDefault();Navigate("/");Dispatch(cleanLogin())}}>Login</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Register