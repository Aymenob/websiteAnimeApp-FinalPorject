import React from 'react'

const NewAnimes = ({Rate,animePicture,animeName,season}) => {
    return (
        <div class="New">
            <div class="NewRate"> 
                {Rate}
            </div>
            <div class="NewPicture">
            <button style={{ marginLeft:"-0.1cm",marginTop:"0cm",height:"2cm",width:"2cm"}} onClick={()=>alert("its working")} type="button" >
                <img  style={{marginLeft:"-1cm",marginTop:"-1cm", position:"absolute",minHeight:"2cm",maxHeight:'2cm',minWidth:"2.2cm",maxWidth:'2.2cm'}} alt="" src={animePicture}></img>
            </button>
            </div>
            <div class="NewInfo">
                <li>{animeName}</li><li>Season:{season}</li>
            </div>
        </div>
    )
}

export default NewAnimes