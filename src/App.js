import React from "react";
//import Counter from "./component/Counter";

import Input from "./component/Input";
import Counter2 from "./component/Counter2";
import Layout from "./component/Layout";
import Counter from "./Hoc/Counter";
import HocCounter from "./Hoc/HocCounter";
// import Counter from "./component/BOT/Counter";

function App() {
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
      <HocCounter comp={<Counter/>} entity="red"/>
      <HocCounter comp={<Counter/>} entity="blue"/>
      <HocCounter comp={<Counter/>} entity="green"/>
      <HocCounter comp={<Counter/>} entity="yellow"/>
      
      
    </>
  );
}

export default App;
