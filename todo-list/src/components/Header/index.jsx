import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    // console.log(this.props)
  render() {
    
    return (
      <div className='todo-header'>
        <input type="text" placeholder='input a todo Item, the press Enter'/>
      </div>
    )
  }
}
