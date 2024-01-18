import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action/actionCreator'

function Layout() {
   let dispatch= useDispatch()
   let fetchdata=useSelector((item)=>{
    return  item.fetchReducer
   })
   console.log('fetchReducer',fetchdata)
  return (
     <>
     <button onClick={()=>{
        dispatch(getData()) 
     }}>GetData</button>
     </>
  )
}

export default Layout