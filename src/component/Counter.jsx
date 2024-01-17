import React from "react";
import { connect } from "react-redux";
import { INC } from "../redux/action/actionType";
import { incHandler } from "../redux/action/actionCreator";
function Counter(props) {
    console.log(props)
  return (
    <>
      <h1>counter:{props.inc}</h1>
      <button onClick={()=>{
        props.incHandler()
      }}   >inc</button>
    </>
  );
}

function mapStateToProps(state)
{
   return state.counterReducer
}
function mapDispatchToProps(dispatch)
{
   return {
     incHandler:()=>{
        dispatch(incHandler(1))
     }
   }
}

export default  connect(mapStateToProps,mapDispatchToProps) (Counter);
