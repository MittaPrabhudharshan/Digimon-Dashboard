import React, { Component } from 'react'

 class Counter extends Component {

    constructor(){
        super()
        this.state= {
            count : 0
        }

        console.log("inside constructor")
    }


    static getDerivedStateFromProps(){
        console.log("Inside GSFP")
    }

    

    componentDidMount(){
        console.log("inside Component did mount")
    }
  render() {
    console.log("inside render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count : this.state.count+1})}>Increase</button>
      </div>
    )
  }
}

export default Counter