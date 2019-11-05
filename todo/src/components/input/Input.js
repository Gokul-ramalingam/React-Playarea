import React,{ Component } from 'react'
import './Input.css'
import List from '../list/List';
class Input extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
              input : '',
              items : [],
              count:0
        }
        this.addListItem = this.addListItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
    }

   addListItem(e){
        e.preventDefault();
        this.setState((prev) =>({
         count:this.state.count+1,
         items: [...this.state.items,{id:prev.count,task:prev.input}]
        }),() => console.log(this.state.items))
    }

    deleteListItem(e){
        const items = this.state.items.filter(item => item.id !== parseInt(e.target.id) )
    this.setState({
       items:items
    })
    }


    handleChange(e){
        this.setState({
            input : e.target.value
        })
    }

    render(){
        return(
            <div>
            <input type="text" className="input"
            onChange={this.handleChange}
            placeholder="Enter stock details here"></input>
            <button className="button" onClick={this.addListItem}>Add</button>
            <List  items={this.state.items} delete={this.deleteListItem}/>
            </div>
        )
    }
}

export default Input;

