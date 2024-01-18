import React from 'react'
import { ERROR, FETCHED, LOADING } from '../action/actionType'
let initalState={loding:false,data:[],error:''}
function fetchReducer(state=initalState,action) {
    if(action.type== FETCHED)
    {
        
        return {...state,data:action.payload,loding:false}
    }
    else if(action.type==LOADING)
    {
        return{...state,loding:true}
    }
    else if (action.type==ERROR)
    {
        return {...state,error:action.payload,loding:false}
    }
    else{
        return state
    }  
}

export default fetchReducer