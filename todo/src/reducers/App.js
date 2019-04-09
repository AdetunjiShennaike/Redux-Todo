//import the actions 
import { ADD, DELETE } from '../actions'

//default state when the application first loads
let initialState = {
  todos = []
}


//a switch statement to handle all of the seperate scenarios of the available actions
export default (state = initialState, action) => {
  switch(action.type){
    case ADD:
      return {
        ...state,
        todos: ({...todos}, action.payload)
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