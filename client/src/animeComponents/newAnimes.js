import React from 'react'

const NewAnimes = ({Rate,animePicture,animeName,Season}) => {
    return (
        <div class="New">
            <div class="NewRate"> 
                {Rate}
            </div>
            <div class="NewPicture">
            <button style={{ marginLeft:"-0.1cm",marginTop:"0cm",position:"relative",minHeight:"2cm",maxHeight:'2cm',width:"2.2cm"}} onClick={()=>alert("its working")} type="button" >
                <img  style={{marginLeft:"-0.2cm",marginTop:"-0.1cm", position:"relative",minHeight:"2cm",maxHeight:'2cm',width:"2.2cm"}} alt="" src={animePicture}></img>
            </button>
            </div>
            <div class="NewInfo">
                <li>{animeName}</li><li>Season:{Season}</li>
            </div>
        </div>
    )
}

export default NewAnimes