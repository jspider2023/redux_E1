import { INC } from "../action/actionType";

let initalState = { inc: 10 };
export function counterReducer(state = initalState, action) {
   if(action.type==INC)
   {
    return {...state,inc:state.inc+1}
   }
   else{
    return state
   }
}