// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
// import fs from 'fs'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// ---read the local storage todos from json file-----
// import jsonData from './state.json'

// ---It's easy to read data from local json file, But i fail to save data to json file.----
//----so i save and read data by localStorage.setItem()  and localStorage.getItem()


// change function Component to class Component
export default class App extends Component {
  // state = {todos:[
  //     {id:'1',name:'coding',done:true},
  //     {id:'2',name:'eating',done:true},
  //     {id:'3',name:'sleeping',done:false}
  // ]}
  // state = {todos:jsonData}
  state= {todos:JSON.parse(localStorage.getItem('todos'))}

//  when you visit the page first time, localDtorage.getItem('todos') will be null. todos.map() will be a Error . so initialize the state by the following codes when localDtorage.getItem('todos') will be null
  state = JSON.parse(localStorage.getItem('todos')) ? 
  {todos:JSON.parse(localStorage.getItem('todos'))} : 
  {todos:[
    {id:'1',name:'coding',done:true},
    {id:'2',name:'eating',done:true},
    {id:'3',name:'sleeping',done:false}
]}


// save data to local file
  saveData = (todos) =>{
    // const jsonPath = './state.json'
    // const jsonData = JSON.stringify(todos)
    localStorage.setItem('todos',JSON.stringify(todos))


  }

// save data to local storage after update todos
  componentDidUpdate(){
    this.saveData(this.state.todos)

    // localStorage.removeItem('todos');
    // console.log('componentDidUpdate')
  }
  
  


// insert a new todo to todos ,the function will pass to Component Header by props
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]

    this.setState({todos:newTodos})
    this.saveData(newTodos)

  }

  // delete a todo from todos,The function will pass to Component Item through Component List by props
deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter(function(todo){
      // console.log(todo.id,id)
      return todo.id !== id

    })
    this.setState({todos:newTodos})
}
// mart tasks as completed or not, The function will pass to Component Item through Component List by props
martTOdo = (id) => {
  
  const {todos} = this.state
  const newTodos = todos.map((todo)=>{
      // console.log(id,todo.id)
      // console.log(todo.done)
      // todo.id === id ? todo.done = !todo.done : todo.done = todo.done
      if (todo.id === id) todo.done = !todo.done
      // console.log(todo.done)
      return todo
  })
  // console.log(newTodos)
  this.setState({todos:newTodos})
}

//  mart all tasks as completed or not, The function will pass to Component Footer by props
markTodos = (isMarkAll) => {
  const {todos} = this.state
  const newTodos = todos.map((todo) => {
    todo.done = isMarkAll
    return todo

  })
  console.log(newTodos)
  this.setState({todos:newTodos})

}


removeCompleteds = () => {
  const {todos} = this.state
  const newTodos = todos.filter(function(todo){
    return todo.done === false
  })

  
  

  this.setState({todos:newTodos})

}

  render() {
    console.log(this.state)
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} deleteTodo={this.deleteTodo} markTodo={this.martTOdo} />
            <Footer todos={todos} markTodos={this.markTodos} removeCompleteds={this.removeCompleteds} />
        </div>

      </div>
    )
  }
}
