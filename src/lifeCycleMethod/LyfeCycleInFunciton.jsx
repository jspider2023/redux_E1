import React, { useEffect, useState } from 'react'

function LyfeCycleInFunciton() {
    // console.log('..........component is loaded..............')
    let [count,setCount]  = useState(0)
    let[text,setText]=useState("")
    //without any dep. = normal function
    // useEffect(()=>{ console.log('hello effect')})
    //with empty dep. = mount phase
    // useEffect(()=>{ console.log('hello effect')},[])
    //with dep== update phase
    // useEffect(()=>{ console.log('hello effect')},[count])
    //useEffect with the cleanup(unmount phase)
    useEffect(()=>{
        
        let x= setTimeout(()=>{
            console.log('press')
            console.log('count',count)
            setCount(count+1)
        },4000)
        
        return ()=>{
           clearTimeout(x)
        }
    },[text])
  return (
           <>
           <h1>counter</h1>
           <input type="text" placeholder='enter your name' value={text} onChange={(e)=>{
            setText(e.target.value)
           }}/>
           <button onClick={()=>{setCount(count+1)}}>INC</button>
           <h1>totoal count of keypress is {count}</h1>
           </>
  )
}

export default LyfeCycleInFunciton