import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter2() {
  let {inc,dec}=  useSelector((item)=>{
     return item.newCounter
  })
     let dispatch= useDispatch() 
  return (
     <>
     <h1>inc:{inc}</h1>
     <h1>dec:{dec}</h1>
     <button onClick={()=>{
        dispatch({type:"INC2",payload:10})
     }} >inc</button>
     <button onClick={()=>{
        dispatch({type:"DEC2",payload:1})
     }}>dec</button>
     </>
  )
}

export default Counter2