import React, { Component } from 'react'

export default class Greeting extends Component {
    componentWillUnmount()
    {
        console.log('hello i am cleanup in greeting')
    }
  render() {
    return (
        
       <h1>hello fellow</h1>
    )
  }
}
