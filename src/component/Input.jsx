import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { SET } from "../redux/action/actionType";
import { textHandler } from "../redux/action/actionCreator";
function Input(props) {
    console.log(props)
  return (
    <>
      <input type="text"  value={props.text} onChange={(e)=>{
        props.textHandlr(e)
      }}/>
      <Button/>
      <hr />
      <p>{}</p>
    </>
  );
}
function mapStateToProps(state)
{
  return  state.inputReducer
}
function mapDispatchToProps(dispatch)
{
    return {
        textHandlr:(e)=>{
            dispatch(textHandler(e))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Input)
