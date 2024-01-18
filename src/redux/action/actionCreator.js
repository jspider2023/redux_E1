import { useDispatch } from "react-redux";
import { ENTER, ERROR, FETCHED, INC, LOADING, SET } from "./actionType";

export function incHandler(inc) {
  return { type: INC, payload: inc };
}
export function textHandler(e) {
  return { type: SET, payload: e };
}
export function submitHandler() {
  return { type: ENTER };
}
export function getData() {
  return (dispatch) => {
    dispatch({ type: LOADING });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((item) => {
        return item.json();
      })
      .then((data) => {
        dispatch({ type: FETCHED, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  };
}
