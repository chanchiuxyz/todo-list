import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
// delete a todo from todos
  // const {deleteTodo} = this.props
  deleteOnClick = (event) => {
    // console.log(event.target.id)
    const {id} = event.target
    // console.log(id)
    this.props.deleteTodo(id)

}

  markCheckboxOnChange = (event) => {
    const {id} = event.target
    console.log(event)
    this.props.markTodo(id)
  }
  render() {
    const{id,name,done} = this.props

    return (
      <li className='item-list'>
        <label htmlFor="">
            <input type="checkbox" id={id}  checked={done} onChange={this.markCheckboxOnChange} />
            <span>{name}</span>
        </label>
        <button className='btn btn-delete' id={id} onClick={this.deleteOnClick} >Delete</button>
      </li>
    )
  }
}
