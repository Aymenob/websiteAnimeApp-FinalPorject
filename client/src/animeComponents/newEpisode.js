import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewEpisode = ({animeName,animePicture,season,number,url,Id}) => {
    const Navigate=useNavigate()
    
    return (
        <div>
            <div>
                <button class="animePicture-btn" onClick={()=>Navigate(`/watch/${animeName}/season${season||0}/${number}/${Id}`,{state:{animeName,animePicture,season,number,url}})} type="button" >
                    <img style={{ marginLeft:"-0.2cm",marginTop:"-0.1cm",position:"relative",minWidth:"4.5cm",maxWidth:'4.5cm',minHeight:"5.5cm",maxHeight:'5.5cm',width:"2.1cm"}} alt="" src={animePicture} />

                </button>
            </div>
            <div>{animeName}</div>
            <div>Season:{season}  | Episode:{`${number}`}</div>
        </div>
    )
}

export default NewEpisode