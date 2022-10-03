import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert2"
const EpisodesBtn = ({number,season,animeName}) => {
  const Navigate=useNavigate()
  const authorized = useSelector(state => state.Users.authorized)
  return (
    
     <button style={{maxHeigth:"1cm"}} onClick={()=>{authorized?Navigate(`/watch/${animeName}/${season||0}/${number}`):swal.fire({ text: "Please Sing in to watch Episodes", icon: "warning", confirmButtonColor: "orange", confirmButtonText: "Sign in",denyButtonColor:"tomato",denyButtonText:"Sign up",showDenyButton:true, showCloseButton: "true", })
     .then(result => { result.isConfirmed ? Navigate("/Login") :result.isDenied? Navigate("/Register"):Navigate() })}} type="button" class="btn btn-outline-success">{number}</button>
    
     
  )
}

export default EpisodesBtn