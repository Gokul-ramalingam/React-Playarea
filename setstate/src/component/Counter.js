import React,{ Component } from 'react'


                                                                      //Three import points regarding setState

//Always use setState to update state and never modify the state directly
//Code to be executed after state update, then place the code in callback function as a second argument to setState method
//whenever we need to update state based on prev state pass in function as argument instead of regular object



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

     //As the required output should be for each click count should be incremented by one but 
              //here it i is not incrementing count by one
               //To over come the problem we can use the soln in counter1.js
               //The above problem is because of the asynchronous calls

    render(){
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick={this.increment}>increment</button>
            </div>
        )
    }

}

export default Counter;