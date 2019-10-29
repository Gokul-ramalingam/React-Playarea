import React,{ Component } from 'react'

class Counter2 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count+1
        },() =>{
            console.log('Callback Value', this.state.count);
        })
        
    }

    //Whenever this function is called the values should be incremented by 5 but it increments only by one
    //the sol is given in counter3.js
    //This is because react groups multiple set calls
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

export default Counter2;
