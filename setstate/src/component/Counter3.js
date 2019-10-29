import React,{ Component } from 'react'

class Counter3 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
//Whenever we need to update a state by previous state make sure to use callback function instead of the regular object
    increment = () => {
        this.setState((prevState) => ({
            count : prevState.count+1
        }))
        
    }

   
     incrementFive = () => {
         this.increment();
         this.increment();
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

export default Counter3;
