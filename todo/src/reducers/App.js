//import the actions 
import { ADD, DELETE } from '../actions/App'

//default state when the application first loads
let initialState = {
  todos: [{
    name: 'test',
    completed: false,
    id: 1
  }]
}


//a switch statement to handle all of the seperate scenarios of the available actions
export default (state = initialState, action) => {
  switch(action.type){
    case ADD:
    console.log(action.payload)
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }

}