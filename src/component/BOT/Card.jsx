import React from 'react'

function Card({count}) {
    console.log('hello i am card comp')
    // let i=1
    // while(i<10000)
    // {
    //     console.log('hello')
    //     i++
    // }
  return (
     <>
     <h1>hello i am card component {count}</h1>
     </>
  )
}

export default React.memo(Card) 