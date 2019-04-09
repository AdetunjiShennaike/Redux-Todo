import React from 'react'

//import the connect that bridges the react and redux 
import { connect } from 'react-redux';
import { add } from '../actions';

class ToDo extends Component {
  state = {
    newToDo: {
      name: '',
      completed: false,
      id: Date.now()
    }
  }

  eventHandler(event) {
    this.setState({
      name: event.target.value
    })
  }

  newTask(event) {
    event.preventDefault()
    this.props.add(this.state.newToDo)
    this.setState({
      name: ''
    })
  }

  render() {
      return (
        <div>
          <input 
            type='text'
            value={this.state.name}
            placeholder='New Task'
            onchange={this.eventHandler}
          />
          <button onClick={this.newTask}>Add</button>
        </div>
      );
  }
}


// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { add })(Todo);
