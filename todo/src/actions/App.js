//export the action type variables(lets) so that there will be an error if the spelling or anything else is off
export let ADD = 'ADD'
export let DELETE ='DELETE'

//action creators that will be sent to the reducer, where they will handle the logic for the redux store
export let add = (todo) => {
  return {
    type: ADD,
    payload: todo
  }
}

export let remove = (todo) => {
  return {
    type: DELETE,
    payload: todo
  }
}