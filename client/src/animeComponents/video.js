import React from 'react'

const Video = ({url,Description}) => {
  return (
    
         <div >
        <p class="Title">{Description}</p>
      <iframe width="700" height="395" src={url.replace(/\"/g,'').replace(/\'/g,'')} title="" frameborder="0"  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" ></iframe>
      
    </div>
    
  )
}

export default Video