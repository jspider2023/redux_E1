import React, { useEffect, useState } from "react";
function Debouncing() {
  let [term, setTerm] = useState("");
  let [todo, setTodo] = useState([]);
  let [filter, setFilter] = useState([]);
  async function getData() {
    let url = "https://dummyjson.com/products";
    let data = await fetch(url);
    let result = await data.json();
    console.log('hello i am result',result.products)
    let result2 = result.products;
    setFilter(result2);
    setTodo(result2);
  }
  function filterHandler(e) {
    setTerm(e.target.value);
  }
  async function filterData() {
   let res=  await fetch(`https://dummyjson.com/products/search?q=${term}`)
     let data=  await res.json()
      setFilter(data.products)
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let id=setTimeout(()=>{
        filterData()
    },1000)
    return ()=>{
        clearTimeout(id)
    }
   
   

  }, [term,todo]);
  return (
    <div>
      <h1> debouncing technic</h1>
      <hr />
      <input
        type="text"
        value={term}
        onChange={(e) => {
          filterHandler(e);
        }}
      />
      {filter.length > 0 &&
        filter.map(({ title }) => {
          return (
            <h1 style={{ border: "1px solid black", padding: "16px" }}>
              {title}
            </h1>
          );
        })}
    </div>
  );
}

export default Debouncing;
