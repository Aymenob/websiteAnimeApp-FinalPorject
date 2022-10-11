import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert2"
const FavoritesTrailer = ({ animeName, animePicture, season, number, url, Id }) => {
    const Navigate = useNavigate()
    const authorized = useSelector(state => state.Users.authorized)
    return (
        <div style={{ marginLeft: "-0.2cm", marginTop: "-0.1cm", position: "relative", minWidth: "4.7cm", maxWidth: '4.7cm', minHeight: "6.2cm", maxHeight: '6.2cm', width: "2.1cm" ,marginRight: "0cm", marginLeft: "0.3cm", border: " red" }} >




           
                <button style={{ marginLeft: "0.2cm", marginTop: "0cm", position: "relative", minWidth: "4.1cm", maxWidth: '4.1cm', minHeight: "4.7cm", maxHeight: '4.7cm', width: "2.1cm" }}  onClick={() => {
                    Navigate(`/watch/${animeName}/${season || 0}`)
                }} type="button" >
                    <img style={{ marginLeft: "-0.2cm", marginTop: "-0.1cm", position: "relative", minWidth: "4.1cm", maxWidth: '4.1cm', minHeight: "4.7cm", maxHeight: '4.7cm', width: "2.1cm" }} alt="" src={animePicture} />

                </button>

            
            <div class="animeTitle">{animeName}
            
           
            
            </div>
             <svg onClick={()=>{alert("working")}} style={{cursor:"hand",marginLeft:"0.2cm",marginTop:"-0.2cm",color:"red"}}xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-dash-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
            </svg>

            <span  style={{marginLeft:"0.6cm"}}>Season:{season}</span>
           
        </div>
        
    )
}

export default FavoritesTrailer