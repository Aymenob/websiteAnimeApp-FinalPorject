import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert2"
const NewEpisode = ({ animeName, animePicture, season, number, url, Id }) => {
    const Navigate = useNavigate()
    const authorized = useSelector(state => state.Users.authorized)
    return (
        <div>
            <div>
                <button class="animePicture-btn" onClick={() => {
                    authorized?Navigate(`/watch/${animeName}/${season||0}/${number}`) :
                        swal.fire({ text: "Please Sing in to watch Episodes", icon: "warning", confirmButtonColor: "orange", confirmButtonText: "Sign in",denyButtonColor:"tomato",denyButtonText:"Sign up",showDenyButton:true, showCloseButton: "true", })
                            .then(result => { result.isConfirmed ? Navigate("/Login") :result.isDenied? Navigate("/Register"):Navigate() })
                }} type="button" >
                    <img style={{ marginLeft: "-0.2cm", marginTop: "-0.1cm", position: "relative", minWidth: "4.5cm", maxWidth: '4.5cm', minHeight: "5.5cm", maxHeight: '5.5cm', width: "2.1cm" }} alt="" src={animePicture} />

                </button>
            </div>
            <div class="animeTitle">{animeName}</div>
            <div class="animeSubTitle">Season:{season}  | Episode:{`${number}`}</div>
        </div>
    )
}

export default NewEpisode