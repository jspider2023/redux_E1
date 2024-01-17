import { ENTER, INC, SET } from "./actionType";

export function incHandler(inc)
{
   return {type:INC,payload:inc}
}
export function textHandler(e)
{
   return {type:SET,payload:e}
}
export function submitHandler()
{
   return {type:ENTER}
}