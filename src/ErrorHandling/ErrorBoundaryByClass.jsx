import React, { Component } from 'react'
import FallBack from './FallBack';

export default class ErrorBoundaryByClass extends Component {
    constructor()
    {
        super()
        this.state={error:false,errorInfo:''}
    }
    componentDidCatch()
    {
         
        console.log('hello i am error')
    }
    static getDerivedStateFromError(error) {  
        // It will update the state so the next render shows the fallback UI. 
        console.log(error) 
        return { error: true,errorInfo:error.message };  
      } 
      clickHandler()
      {
        window.location.reload()
      } 
  render() {
    return (
        <>
            {!this.state.error &&  this.props.children}
            { this.state.error && <FallBack info={this.state.errorInfo}/>}
        </>
   
    )
  }
}
