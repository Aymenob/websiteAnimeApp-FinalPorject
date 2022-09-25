import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  DeleteUserAdmin} from "./Redux/usersSlice";

const AdminOnlyProfile = ({userName,Email,Role,Image,userID,userRole}) => {
    const dispatch = useDispatch()
    
  return (
    <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Photo</th>
                <th scope="col">userName</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img alt='' width="120" height="150" src={Image} /></td>
                <th>{userName}</th>
                <td>{Email}</td>
                <td>{Role}</td>
                {userRole==="user"?<td><button style={{position:"relative",bottom:"-40px",right:"-80px"}} class="btn btn-danger" onClick={(e) => { e.preventDefault(); dispatch() }}>Ban</button></td>:null}
                <td><button style={{position:"relative",bottom:"-40px",right:"-40px"}} class="btn btn-outline-danger" onClick={(e) => { e.preventDefault(); dispatch(DeleteUserAdmin(userID)) }}>Delete</button></td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default AdminOnlyProfile