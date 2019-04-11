import React, { Component } from 'react';
// import './App.css';
import ToDo from './components/Todo'
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux'
import { remove } from './actions/App'

class App extends Component {

  toggleTask() {

  }

  removeFinished() {

  }

  render() {
    // console.log(this.props, this.props.todos)
    return (
      <div className="App">
        <h1>To Do List</h1>
        {this.props.todos.map(event => <ToDoList key={event.id} todo={event} />)}
        <ToDo />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
};


export default connect(mapStateToProps, { remove })(App);

