

import React, { useEffect, useState } from 'react'
import FallBack from './FallBack'

function A1() {
let [count,setCount]=useState(1)
let [error,setError]=useState(false)
function counterHandler()
{
    setCount(count+1)
        
   
    
}
if(count>5)
        {
            throw new Error('somthing wrong in A1')
        }



  return (
     <>
     {!error &&   <div>
     <h1>A1</h1>
       <button onClick={counterHandler}>click</button>
     </div>} 
       <hr/>
       
     </>
  )
}

export default A1