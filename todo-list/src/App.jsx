// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
// change function Component to class Component
export default class App extends Component {
  state = {todos:[
      {id:'001',name:'coding',done:true},
      {id:'001',name:'eating',done:true},
      {id:'001',name:'sleeping',done:false},

  ]}
  render() {
    const todos = this.setState
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
            <Header a='1' />
            <List todos={todos}/>
            <Footer />
        </div>

      </div>
    )
  }
}
