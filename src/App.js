import React from "react";
import Counter from "./component/Counter";

import Input from "./component/Input";
import Counter2 from "./component/Counter2";
import Layout from "./component/Layout";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Input />
      <hr/>
      <Counter2/>
      <hr/>
      <Layout/>
    </>
  );
}

export default App;
