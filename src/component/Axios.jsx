import React, { useEffect } from "react";
import axios from "axios";

function Axios() {
    axios.defaults.headers.common['Authorization']="hello how are you"
  // function getData()
  // {
  //  fetch("https://dummyjson.com/products",{method:"GET"}).then((item)=>{
  //     return item.json()
  //  }).then((data)=>{
  //     console.log(data)
  //  }).catch((err)=>{
  //     console.log(err)
  //  })
  // }
  function getDataByAxios()
  {
     axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res.data)
     }).catch( (err)=>{
         console.log(err)
     })
  }

  // ....post method......
  let url = "https://jsonplaceholder.typicode.com/posts";
  let details={name:"utsav",add:"delhi"}
//   async function postData() {
//     let res = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json",
//                 "Autherziation" :"aabckfdsklfjdsalfjfdslkfjklfjdsfsdkj" },
//       data: JSON.stringify(details)
//     });
//      let result= await res.json()
//      console.log(result)
//   }
  async function postDataByAxios() {
    let res= await  axios.post(url,details)
     let result= await res.data
    console.log(result)
  }

  useEffect(() => {
    // getData()
     getDataByAxios()
     //postData();
    postDataByAxios();
  }, []);
  return <div>Axios</div>;
}

export default Axios;
