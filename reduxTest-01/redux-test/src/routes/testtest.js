import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchTest from '../utils/fetchTool';

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
    // console.log(todos);
    // console.log(this.props);
    this.props.actions.addTodo(input.value);
    input.value = '';
  }
  //调用接口
    getFetchDataButtonClick=() => {
   fetchTest.fetchTestFunc('http://192.168.0.1/v1/match/get-matchinfo'
      , this.props.actions.getFetchData);
    console.log(this.props.todos);
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
            this.props.todos.length === 0
            ? 0
            : this.props.todos[this.props.todos.length - 1].text
          }
          </p>
        </form>
                <button onClick={this.getFetchDataButtonClick}>
          getFetchDataButton
        </button>
     <p>通过this.props.todos去获取具体接口返回数据</p>
      </div>
    );
  }
}
testtest.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
export default testtest;
