import React from 'react'
import { connect } from 'react-redux'
import { submitHandler } from '../redux/action/actionCreator'

function Button(props) {
    console.log(props)
  return (
   <button onClick={()=>{
    props.addHandler()
   }}>click</button>
  )
 
}
function mapDispatchToProps(dispatch)
{
  return {
      addHandler:()=>{
          dispatch(submitHandler())
      }
  }
}

export default connect(null,mapDispatchToProps) (Button)