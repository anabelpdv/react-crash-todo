import React from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import './App.css';
import TodoItem from './components/TodoItem.js';
import Header from './components/layout/header';
import uuid from 'uuid';


class App extends React.Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id:uuid.v4(),
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id:uuid.v4(),
        title: 'Meeting with boss',
        completed: false,
      }
    ]
  }

  markComplete =(id)=>{
    this.setState({todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
    })
  })
  }

  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id !== id
    )]});
  }
  addTodo=(title)=>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed:false,
    }
    this.setState({todos: [...this.state.todos,newTodo]})
  }
  render(){
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo  addTodo={this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
