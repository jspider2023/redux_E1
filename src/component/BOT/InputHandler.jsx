import React from 'react'

function InputHandler({name,textHandler}) {
    console.log('hello i am input handler')
  return (
     <>
       <input type='text' placeholder='enter your name' onChange={(e)=>{
        textHandler(e)
       }}  value={name} />
       <br/>
       <h1>enter value is : {name}</h1>
        </>
  )
}

export default React.memo(InputHandler) 