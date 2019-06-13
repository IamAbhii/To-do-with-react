import React from 'react';

export default class ToDo extends React.Component {

  remove = (e, todo) => {
    e.preventDefault();
    this.props.removeTodo(todo);
  }

  complete = (e, todo) => {
    e.preventDefault();
    this.props.completeTodo(todo);
  }


  render = () => {


    return (
      <>
        {this.props.list.map((complete) => {
          return <ul>
            <li>{complete}</li>
          </ul>
        })}

      </>
    )
  }
}