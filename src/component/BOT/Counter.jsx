import React, { useCallback, useState } from 'react'
import Card from './Card'
import InputHandler from './InputHandler'
import Math from './Math'

function Counter() {
    let [count,setCount]=useState(1)
    let [name,setName]=useState('')
    let [dec,SetDec]=useState(10)
    
    function incHandler()
    {
        setCount(count+1)
    }
    let textHandler= useCallback((e)=>{
      setName(e.target.value)
    },[dec])
    
    console.log('hello i am counter comp')
  return (
     <>
     <h1>count {count}</h1>
     <h1>dec{dec}</h1>
     <hr/>
     <br/>
     <button onClick={incHandler}   >Inc</button>
     <button onClick={()=>{
        SetDec(dec-1)
     }}>dec</button>
     <hr/>
     <InputHandler textHandler={textHandler} name={name}/>
     <Card count={count} />
     <hr/>
     <Math/>
     </>
  )
}

export default Counter