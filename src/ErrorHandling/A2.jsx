import React, { useEffect, useState } from 'react'
import FallBack from './FallBack'

function A2() {
let [count,setCount]=useState(1)
let [error,setError]=useState(false)
function counterHandler()
{
    setCount(count+1)
  
       
    
   
}
if(count>4)
{
    throw new Error('somthing wrong form A2')
}



  return (
     <>
     {!error &&   <div>
     <h1>A2</h1>
       <button onClick={counterHandler}>click</button>
     </div>}
     {error && <FallBack/>}
    
       
     </>
  )
}

export default A2