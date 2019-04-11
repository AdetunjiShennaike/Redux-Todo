import React from 'react'

let ToDoList = (props) => {
  return (
    <div>
      <p>{props.todo.name}</p>
    </div>
  )
}

export default ToDoList