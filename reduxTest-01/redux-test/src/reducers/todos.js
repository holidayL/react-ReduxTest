const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('reducers---ADD-TODO');
      console.log(state);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          name: action.name,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case 'getFetchData_TODO':
      return [
        ...state,
        {
          data: action.data,
        },
      ];
    default:
      return state;
  }
};

export default todos;
