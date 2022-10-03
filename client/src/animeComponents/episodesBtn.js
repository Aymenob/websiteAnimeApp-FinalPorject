import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert2"
const EpisodesBtn = ({number,season,animeName}) => {
  const Navigate=useNavigate()
  const authorized = useSelector(state => state.Users.authorized)
  return (
    
     <button style={{maxHeigth:"1cm"}} onClick={()=>{authorized?Navigate(`/watch/${animeName}/${season||0}/${number}`):swal.fire({text:"Please Sing up to watch This Episode",icon:"warning",confirmButtonColor:"orange",confirmButtonText:"Sign Up",showCloseButton:"true",}).then(result=>{result.isConfirmed?Navigate("/Login"):Navigate()})}} type="button" class="btn btn-outline-success">{number}</button>
    
     
  )
}

export default EpisodesBtn