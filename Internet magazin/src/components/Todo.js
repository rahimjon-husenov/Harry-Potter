import React from 'react'
import Data from './Data.js'


const Todo = (props) => {

    return (
        <div className="rahimjon">
            <h1>{props._id}</h1>
            <img  className="img" src={`${props.image}`}></img>
            <h2 className="name">{props.name}</h2>
            <h1 className="price">{props.price} $</h1>
        </div>
    )
}

export default Todo