import React from 'react'

function HocCounter({comp,entity="white"}) {
    let atmPin=1234
  return (
    <div style={{width:"375px",margin:"8px",border:"1px solid black",backgroundColor:entity}}> 
        {comp}
        <h1>pin:{atmPin?"creadit":"login first"}</h1>
    </div>
  )
}

export default HocCounter