function TodoReducer(state = [], action) {


  if (action.type == 'add_todo') 
  {
    let nextId = state.length + 1;
    return [...state,{ id: nextId, text: action.payload.todotext }]
  } 

  else if (action.type == 'delete_todo')
   {
    const newTodoList = state.filter(todo => todo.id !== action.payload.id);
    return newTodoList;
  }

  return state;
}

export default TodoReducer;
