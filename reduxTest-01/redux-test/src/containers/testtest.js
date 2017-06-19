import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as CounterActions from '../actions';
// import testtest from '../routes/testtest';
import Header from '../components/Header'

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} todo={todos} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
