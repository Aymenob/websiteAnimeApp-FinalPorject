import React from 'react'

const Video = ({url,Description}) => {
  return (
    
         <div class="episodeSection">
        <p class="Title">{Description}</p>
      <iframe width="560" height="315" src={url.replace(/\"/g,'').replace(/\'/g,'')} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" ></iframe>
      
    </div>
    
  )
}

export default Video