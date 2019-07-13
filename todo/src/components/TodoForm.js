import React from 'react';
import { connect } from 'react-redux';
import { makeTodo, toggleTodo, deleteTodo } from '../redux/actions';
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
        <h5>
          CURRENT TODOS TOTAL: <em>{this.props.todo.length}</em>
        </h5>
        {this.props.todo.map(i => {
          return (
            <li
              key={i.id}
              onClick={() => toggleTodo(i.id)}
              style={{
                textDecoration: i.completed ? 'line-through' : 'none',
                color: i.completed ? '#777777' : '#a80202'
              }}
            >
              {i.value}
            </li>
          );
        })}

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
        <div className='delete-todos'>
          <button class='big-red'>Delete Todos</button>
          <h1 className='warning'>
            <em>WARNING!</em> <br />⚠ THIS BUTTON DELETES ALL TODOS MARKED AS
            COMPLETE! ⚠
          </h1>
        </div>
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

export default connect(
  mapStateToProps,
  { makeTodo, toggleTodo, deleteTodo }
)(TodoForm);
