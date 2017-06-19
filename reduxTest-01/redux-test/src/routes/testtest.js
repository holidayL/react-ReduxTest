import React, { Component } from 'react';
import PropTypes from 'prop-types';

let input;
class testtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // input: '',
    };
  }
  testDispatch=(e) => {
    console.log('testtest');
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    const { todos } = this.props;
    // testffff(input.value);
    // this.props.todoActions();
    console.log(todos);
    console.log(this.props);
    input.value = '';
    // console.log(this.props);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.testDispatch}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">
          Add Todo
        </button>
          <p>{
            // this.props.todos.length === 0
            // ? 0
            // : this.props.todos[this.props.todos.length - 1].text
          }
          </p>
        </form>
      </div>
    );
  }
}
testtest.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
export default testtest;
