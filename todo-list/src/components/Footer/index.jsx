import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
   markTodosOnChange = (event) =>{
    // console.log(event.target.checked)
     const isMarkAll = event.target.checked
     this.props.markTodos(isMarkAll)

   }

   removeCompleteds = () => {
        this.props.removeCompleteds()
   }
  render() {
    const {todos} = this.props
    let completeds = 0
    todos.map((todo) => {
        if (todo.done === true) completeds += 1
    })

    return (
      <div className="todo-footer">
        <label htmlFor="">
            <input type="checkbox" onChange={this.markTodosOnChange} />

        </label>
            <span>
                <span>Compoleted {completeds} </span>/ Total {todos.length}
            </span>
            <button className="btn btn-delete" onClick={this.removeCompleteds}>Remove completed Items</button>
      </div>
    )
  }
}
