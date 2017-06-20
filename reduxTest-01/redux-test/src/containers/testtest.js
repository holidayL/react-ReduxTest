import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as CounterActions from '../actions';
import testtest from '../routes/testtest';
import Header from '../components/Header'

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(testtest);
