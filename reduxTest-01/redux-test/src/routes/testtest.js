import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import fetchTest from '../utils/fetchTool';
import '../mockData';

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
    console.log("todos");
    console.log(this.props);
    this.props.actions.addTodo(input.value);
      console.log(this.props);
    input.value = '';
  }
  //调用接口
    getFetchDataButtonClick=() => {
   fetchTest.fetchTestFunc('http://192.168.0.1/v1/match/get-matchinfo'
      , this.props.actions.getFetchData);
    console.log(this.props.todos);
  }
  //mock功能测试
  mockTestClick=()=>{
fetch('http://rapapi.org/mockjsdata/25067/api/v1/security/login',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
.then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status >= 300) {
        if (response.status === 400) {
        } if (response.status === 404) {
        } else {
        }
      }
    })
      .then((json) => {
        console.log(json);
        if (json.code === 1000 || json.code === 1033) {

        } else {
        }
      })
      .catch((error) => {
        console.error(`request failed ${error}`);
      });
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
                   <button onClick={this.mockTestClick}>
          mockTest
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
