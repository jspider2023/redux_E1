import React, { useState } from 'react'
import { incHandler } from '../redux/action/actionCreator'

function Counter({color}) {
    let [count,setCount]=useState(1)
  return (
      <div >
        <h1>counter{count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>inc</button>
      </div>
  )
}

export default Counter