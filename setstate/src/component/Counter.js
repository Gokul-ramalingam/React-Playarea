import React,{ Component } from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count)
    }

   incrementFive = () => {      //As the required output should be for each click count should be incremented by five but 
    this.increment();               //here it increments count by only one
    this.increment();              //To over come the problem we can use the soln in counter1.js
    this.increment();
    this.increment();
    this.increment();
   }

    render(){
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick={this.incrementFive}>increment</button>
            </div>
        )
    }

}

export default Counter;