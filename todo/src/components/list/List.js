import React from 'react'
import './List.css'
function List(props)
{
    const listItems = props.items.map(item => 
        <li key={item.id} id={item.id} className="list" onClick={props.delete}>{item.task}</li>)
return (
    <div>
    <ul className="unorderedList">
    {listItems}
    </ul>
    </div>
)
}

export default List;