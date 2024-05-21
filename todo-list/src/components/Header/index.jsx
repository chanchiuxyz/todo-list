import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (event)=>{
        // If press Enter
        if (event.keyCode !== 13) {
            return
        }
        if (event.target.value.trim() === '') {
            alert('input task before press Enter')
            return
        }
        const todoObj = {id:Date.now().toString(),name:event.target.value,done:false}
        // console.log(event.target.value,event.keyCode)
        // console.log(todoObj)
        this.props.addTodo(todoObj)

    }

  render() {
    // console.log(this.props)
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='input a todo Item, the press Enter'/>
      </div>
    )
  }
}
