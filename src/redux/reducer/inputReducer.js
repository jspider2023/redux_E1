import { ENTER, SET } from "../action/actionType";

let initalState = { text: "utsav" ,todo:[]};
export function inputReducer(state = initalState, aciton) {
  switch (aciton.type) {
    case SET:
      return { ...state, text: aciton.payload.target.value };
      case  ENTER:
        {
            return {...state,todo:[...state.todo,state.text]}
        }

    default:
      return state;
  }
}