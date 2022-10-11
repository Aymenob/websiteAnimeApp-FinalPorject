import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FavoritesSearch = ({ animeName, animePicture, season, }) => {
    const Navigate = useNavigate()
    const authorized = useSelector(state => state.Users.authorized)
    const dispatch=useDispatch()
    return (
        
        <div style={{ marginTop: "-0.1cm", position: "relative", minWidth: "4.7cm", maxWidth: '4.7cm', minHeight: "6.2cm", maxHeight: '6.2cm', width: "2.1cm" ,marginRight: "-0.2cm", marginLeft: "0cm", border: " red" }} >




           
                <button style={{ marginLeft: "0.2cm", marginTop: "0cm", position: "relative", minWidth: "4.1cm", maxWidth: '4.1cm', minHeight: "4.7cm", maxHeight: '4.7cm', width: "2.1cm" }}  onClick={() => {
                    Navigate(`/watch/${animeName}/${season || 0}`)
                }} type="button" >
                    <img style={{ marginLeft: "-0.2cm", marginTop: "-0.1cm", position: "relative", minWidth: "4.1cm", maxWidth: '4.1cm', minHeight: "4.7cm", maxHeight: '4.7cm', width: "2.1cm" }} alt="" src={animePicture} />

                </button>

            
            <div class="animeTitle">{animeName}
            
           
            
            </div>
             

            <span  style={{marginLeft:"1.6cm"}}>Season:{season}</span>
           
        </div>
        
    )
}

export default FavoritesSearch