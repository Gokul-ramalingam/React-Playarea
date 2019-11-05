import React,{ Component } from 'react'
import BoilingVerdict from './BoilingVerdict'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperatute : ' '
        }
    }
    handleChange(e){
        this.setState({
             temperatute:e.target.value
        })
    }
    render(){
        return(
        <div>
        <TemperatureInput scale='c'/>
        <TemperatureInput scale='f'/>
        </div>
        )
    }
}

export default Calculator;