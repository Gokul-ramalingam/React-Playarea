import React,{ Component } from 'react'

class Counter1 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }


    //Soln for counter1.js issue
    increment = () => {
        this.setState({
            count : this.state.count+1
        },() =>{
            console.log('Callback Value', this.state.count);
        })
        
    }
    


    render(){
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick={this.increment}>increment</button>
            </div>
        )
    }

}

export default Counter1;