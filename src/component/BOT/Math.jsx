import React, { useMemo, useState } from 'react'

function Math() {
    let [count1,setCount]=useState(1)
    console.log('hello i am math comp')
    let i=1;
    let count=100
   
    let valueHandler=useMemo(()=>{
        while(i<1000)
        {
            console.log('hello')
            i++
            count++
        }
       return count
    },[count1])
   
  return (
    <>
      <h1>boss we are going to deal with heavy  equation</h1>
       <p>the result of hevy cal is: {valueHandler}</p>
       <button onClick={()=>{
        setCount(count+1)
       }}>test</button>
    </>
  
  )
}

export default Math