import React from 'react';
import { connect } from 'react-redux';
import { makeTodo } from '../redux/actions';
import uuid from 'uuid';

import '../App.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      completed: false
    };
  }

  handleChange = evt => {
    evt.preventDefault();

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  createTodo = evt => {
    evt.preventDefault();

    const { value, completed } = this.state;
    // calling the action creator
    const newTodos = { value, completed, id: uuid() };
    this.props.makeTodo(newTodos);

    // resetting the form after it submits
    this.setState({
      value: ''
    });
  };

  render() {
    const { value } = this.state;

    return (
      <section>
        <h2>Todo List</h2>
        <h6>
          CURRENT TODOS TOTAL: {this.props.todo.length}
          {this.props.todo.map(i => {
            return <li key={i.id}>{i.value}</li>;
          })}
        </h6>

        <form onSubmit={this.createTodo}>
          <input
            type='text'
            name='value'
            placeholder='What needs to get done?'
            value={value}
            onChange={this.handleChange}
            required
          />

          <button type='submit'>Submit Todo</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todo: state.todos
  };
};

// const mapDispatchToProps = {
//   makeTodo: makeTodo
// };

export default connect(
  mapStateToProps,
  { makeTodo }
)(TodoForm);
