import React  from 'react'

function Post({data:filter,entity}) {
  return (
    <>
    <h1>{entity}</h1>
    
    <hr/>
    {filter.length>0&& filter.map(({title})=>{
          return  <h1 style={{border:"1px solid black", margin:"5px", padding:"8px"}}>{title}</h1>
    })}
    </>
  )
}

export default Post