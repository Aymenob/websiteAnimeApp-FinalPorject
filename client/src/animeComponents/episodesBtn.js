import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const EpisodesBtn = ({number,season,animeName}) => {
  const Navigate=useNavigate()
  const authorized = useSelector(state => state.Users.authorized)
  return (
    
     <button style={{maxHeigth:"1cm"}} onClick={()=>{authorized?Navigate(`/watch/${animeName}/${season||0}/${number}`):alert("please sign up first")}} type="button" class="btn btn-outline-success">{number}</button>
    
     
  )
}

export default EpisodesBtn