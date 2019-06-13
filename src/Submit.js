import React from 'react';

export default class Submit extends React.Component {
  state = {
    toDo: ''
  }

  addTodo = (e) => {
    this.setState({ toDo: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.toDo !== '')
      this.props.addTodo(this.state.toDo)
    this.setState({
      toDo: '',
    })
  }

  render = () => {
    return (
      <form action="" onSubmit={this.onSubmit}>
        Enter a To-Do<input type="text" value={this.state.toDo} onChange={this.addTodo} />
        <input type="submit" />
      </form>
    )
  }
}