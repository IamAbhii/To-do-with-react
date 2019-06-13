import React from 'react';
import Submit from './Submit';
import ToDo from './Todo';
import Complete from './Complete';
import './App.css';


export default class App extends React.Component {
  state = {
    value: '',
    toDo: [],
    completed: [],
  }

  addTodo = (newTodo) => {
    this.setState((currentState) => ({
      toDo: [newTodo, ...currentState.toDo]
    }))
  }

  handleClick = (selectedTodo, name) => {

    let index = this.state.toDo.findIndex(e => e === selectedTodo);

    this.setState((currentState) => ({
      toDo: [...currentState.toDo.slice(0, index), ...currentState.toDo.slice(index + 1)]
    }), () => {
      if (name === 'done') {
        this.setState((currentState) => ({
          completed: [...currentState.completed, selectedTodo]
        }))
      }
    })

  }

  render = () => {
    return (
      <div className='main-container'>
        <div className='submit'>
          <Submit addTodo={this.addTodo} />
        </div>
        <div className='flex'>
          <div className='todo'>
            To-Do list
          <ToDo
              list={this.state.toDo}
              handleClick={this.handleClick}
            />
          </div>
          <div className='complete'>
            Completed List
          <Complete list={this.state.completed} />
          </div>
        </div>
      </div>
    )
  }
} 
