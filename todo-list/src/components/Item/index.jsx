import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li className='item-list'>
        <label htmlFor="">
            <input type="checkbox" />
            <span>XXXX</span>
        </label>
        <button className='btn btn-delete'>Delete</button>
      </li>
    )
  }
}
