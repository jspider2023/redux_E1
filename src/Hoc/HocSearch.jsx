import { useEffect, useState } from "react"
import { getData } from "../redux/action/actionCreator"

function hocSearch(WrapperComp,entity) {
  return function()
  {
    let [filter,setFilter]=useState([])
    let [todo,setTodo]=useState([])
    let [term,setTerm]=useState('')
    let url=`https://jsonplaceholder.typicode.com/${entity}`
    async  function getData()
    {
        let res= await fetch(url)
        let data= await res.json()
        setFilter(data)
        setTodo(data)
    }
    useEffect(()=>{
         getData()
    },[])

    //this is for the filter
    function searchHandler(e)
    {
     setTerm(e.target.value)
     let filterData=todo.filter((item)=>{
        return item.title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
     })
     setFilter(filterData)
    }
    return(
        <>
        <input type="text" placeholder="search" onChange={(e)=>{
            searchHandler(e) 
        }} value={term}/>
        <hr/>
        <WrapperComp data={filter} entity={entity}/>
        </>
    )
  }  
}

export default hocSearch