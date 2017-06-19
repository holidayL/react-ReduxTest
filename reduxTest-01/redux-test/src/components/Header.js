import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }

  handleSave = text => {
    console.log(this.props);
    console.log(this.props.todo);
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div className="header">
        <h1>
{
  this.props.todo.length === 0 
  ? 0 
  : this.props.todo[this.props.todo.length - 1].id
}
        </h1>
        <button onClick={this.handleSave} />
      </div>
    )
  }
}
