import React from 'react'

const PageBtn = ({number,handlePage}) => {
  

  return (
    
     <button  name={`${number}`} style={{maxHeigth:"1cm",textDecoration:"underline"}} onClick={handlePage} type="button" >{number}</button>
    
     
  )
}

export default PageBtn