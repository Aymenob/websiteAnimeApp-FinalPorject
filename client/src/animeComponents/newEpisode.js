import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewEpisode = ({animeName,animePicture,season,number,url,Id}) => {
    const Navigate=useNavigate()
    const authorized = useSelector(state => state.Users.authorized)
    return (
        <div>
            <div>
                <button class="animePicture-btn" onClick={()=>{authorized?Navigate(`/watch/${animeName}/${season||0}/${number}`):alert("please sign up first")}} type="button" >
                    <img style={{ marginLeft:"-0.2cm",marginTop:"-0.1cm",position:"relative",minWidth:"4.5cm",maxWidth:'4.5cm',minHeight:"5.5cm",maxHeight:'5.5cm',width:"2.1cm"}} alt="" src={animePicture} />

                </button>
            </div>
            <div>{animeName}</div>
            <div>Season:{season}  | Episode:{`${number}`}</div>
        </div>
    )
}

export default NewEpisode