import React from 'react'

const NewEpisode = ({animeName,animePicture,season}) => {
    return (
        <div>
            <div>
                <button class="animePicture-btn" onClick={()=>alert("its working")} type="button" >
                    <img style={{ marginLeft:"-0.2cm",marginTop:"-0.1cm",position:"relative",minWidth:"4.5cm",maxWidth:'4.5cm',minHeight:"5.5cm",maxHeight:'5.5cm',width:"2.1cm"}} alt="" src={animePicture} />

                </button>
            </div>
            <div>{animeName}</div>
            <div>Season:{season}  | Episode:?</div>
        </div>
    )
}

export default NewEpisode