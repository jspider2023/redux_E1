import React, { useEffect, useState } from 'react'
import FallBack from './FallBack'

function A3() {
let [count,setCount]=useState(1)
let [error,setError]=useState(false)
function counterHandler()
{
    setCount(count+1)
       

   
}
if(count>3)
{
    throw new Error('somthing wrong from A3')
}



  return (
     <>
     {!error &&   <div>
     <h1>A3</h1>
       <button onClick={counterHandler}>click</button>
     </div>}
     {error && <FallBack/>}
    
       
     </>
  )
}

export default A3