import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  render() {
    // console.log(this.props)
    const {todos} = this.props

    return (
        <ul className="todo-main">
            {/* <Item />
            <Item /> */}
            {
               todos.map((todo)=>{
                    return <Item key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} markTodo={this.props.markTodo} /> 
               }
            )
            }
        </ul>

    )
  }
}
