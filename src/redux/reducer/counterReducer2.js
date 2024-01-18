import { connect } from "react-redux";

let initalState = { inc: 1, dec: 10 };
function counterReducer2(state = initalState, action) {
  if (action.type == "INC2") {
    return { ...state, inc: state.inc + action.payload };
  } else if (action.type == "DEC2") {
    if (state.dec > 1) {
      return { ...state, dec: state.dec - action.payload };
    } else {
      return { ...state, dec: 1 };
    }
  } else {
    return state;
  }
}

export default counterReducer2;
