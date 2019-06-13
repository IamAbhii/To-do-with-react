import React from 'react';

export default class ToDo extends React.Component {

  render = () => {
    let listOfTodo = this.props.list;
    return (
      <>
        {listOfTodo.map((todo) => {
          return <ul>
            <li>{todo}</li>
            <button name='delete' onClick={(e) => { this.props.handleClick(todo, e.target.name) }}>Delete</button>
            <button name='done' onClick={(e) => { this.props.handleClick(todo, e.target.name) }}>Done</button>
          </ul>
        })}
      </>
    )
  }
}