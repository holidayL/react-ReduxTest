import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let input;
function test({ dispatch, todos }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
          console.log(todos.length);
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
        <p>{todos.length === 0 ? 0 : todos[todos.length - 1].text}</p>
      </form>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return { todos: state.todos };
}

export default connect(mapStateToProps)(test);
