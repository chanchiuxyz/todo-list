import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label htmlFor="">
            <input type="checkbox" />
            <span>XXXX</span>
        </label>
        <button className='btn btn-delete' style={{display:'none'}}>Delete</button>
      </li>
    )
  }
}
