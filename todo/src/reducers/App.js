import React from 'react'



//default state when the application first loads
let initialState = {
  todos = []
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD:
      return {
        ...state,
        todos: action.payload
      }
    case DELETE:
      return {

      }
    default:
      return state
  }

}