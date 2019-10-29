import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        const  {name,age} = this.props;
        // const {state1,state2} = this.state;   Eg : For state
        return(
            <div>
            <h1>Hello {name} age {age}</h1>
            </div>
        )
    }
}

export default Welcome;