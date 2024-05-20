// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
// change function Component to class Component
export default class App extends Component {
  render() {
    return (
      <div className='todo-container'>
        <Header />
        <List />
        <Footer />

      </div>
    )
  }
}
