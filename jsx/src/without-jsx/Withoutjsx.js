import React from 'react'

const Withoutjsx = () =>{
    // return React.createElement('div',null,'Hello World')        //(parent element,properties,children)
 
    return React.createElement('div',
    {id:'hello',className:'hey'} ,
    React.createElement('h1',null,'Hello Gokul'))
}

export default Withoutjsx;