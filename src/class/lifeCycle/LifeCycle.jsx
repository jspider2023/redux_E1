import React from "react";
import Greeting from "./Greeting";
export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { count: 1, name: "sidhu" };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    if (props.name !== state.name) {
      return { name: props.name };
    } else {
      return null;
    }
  }
  componentDidMount() {
    console.log("comp did mount");
  }
  countHandler() {
    this.setState({ count: this.state.count + 1 });
  }
  shouldComponentUpdate(props, state) {
    console.log("hello i am should componentUpdate");
    if (this.state.count != state.count) {
      return true;
    } else {
      return false;
    }
  }
   getSnapshotBeforeUpdate(prePros,nextProps)
  {
    console.log('hello i am getSnapshotBefore ')
    console.log('prevPros',prePros)
    console.log('nextPros',nextProps)
    return null
  }
  componentDidUpdate()
  {
    console.log('component will update')
  }
  render() {
    {
      console.log("hello i am render");
    }
    return (
      <>
           {this.state.count<5 && <Greeting/>} 
        <h1>hello class {this.state.name}</h1>
        <hr />
        <h1>hello i am count {this.state.count}</h1>
        <button onClick={this.countHandler.bind(this)}>incHandler</button>
      </>
    );
  }
}
