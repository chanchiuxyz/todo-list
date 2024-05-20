import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label htmlFor="">
            <input type="checkbox" />

        </label>
            <span>
                <span>Compoleted 0</span>/ Total 2
            </span>
            <button className="btn btn-delete">Remove completed Items</button>
      </div>
    )
  }
}
