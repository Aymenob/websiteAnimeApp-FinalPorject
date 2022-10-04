import React from 'react'

const Video = ({url,Description}) => {
  return (
    
         <div >
        <p class="Title">{Description}</p>
      <iframe width="700" height="395" src={url.replace(/\"/g,'').replace(/\'/g,'')} ></iframe>
      
    </div>
    
  )
}

export default Video