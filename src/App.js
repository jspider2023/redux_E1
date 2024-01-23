import React from "react";
//import Counter from "./component/Counter";

import Input from "./component/Input";
import Counter2 from "./component/Counter2";
import Layout from "./component/Layout";
import Counter from "./Hoc/Counter";
import HocCounter from "./Hoc/HocCounter";
import Todo from "./Hoc/Todo";
import Post from "./Hoc/Post";
import HocSearch from "./Hoc/HocSearch";
import LifeCycle from "./class/lifeCycle/LifeCycle";
// import Counter from "./component/BOT/Counter";

function App() {
  let HocTodo= HocSearch(Todo,'todos')
  let PostTodo= HocSearch(Post,'posts')
  return (
    <>
      {/* <Counter />
      <hr />
      <Input />
      <hr/>
      <Counter2/>
      <hr/>
      <Layout/> */}
      <hr/>
      {/* <Counter/> */}
      {/* <HocCounter comp={<Counter/>} entity="red"/>
      <HocCounter comp={<Counter/>} entity="blue"/>
      <HocCounter comp={<Counter/>} entity="green"/>
      <HocCounter comp={<Counter/>} entity="yellow"/> */}
      {/* <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
          <HocTodo/>
          </div>
          <div className="col-md-6">
           <PostTodo/>
          </div>
        </div>
      </div> */}
      <LifeCycle name="sidhu"/>
      
      
    </>
  );
}

export default App;
