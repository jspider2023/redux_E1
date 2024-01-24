import React, { useEffect } from 'react'

function FallBack({info}) {
    
    function clickHandler()
    {
        window.location.reload()
    }
  return (
     <div>
        <h1>{info}</h1>
        <button onClick={clickHandler}>goBacktoHome</button>
     </div>
  )
}

export default FallBack