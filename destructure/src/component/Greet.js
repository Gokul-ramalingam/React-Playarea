import React from 'react'

const Greet =  ({name,age}) => {
    // const {name,age} = props;      Method2
    return(
        <div>
        <h1>Hello {name} age {age}</h1>
        </div>
    )
}

export default Greet;