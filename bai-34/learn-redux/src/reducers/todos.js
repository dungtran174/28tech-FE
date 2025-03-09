const init = [
  {
    id: 1,
    content: "Learn React",
    completed: true,
  },
  {
    id: 2,
    content: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    content: "Learn Redux Saga",
    completed: false,
  },
];

const todosReducer = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATE_TODO":
      newState = [
        ...newState,
        {
          id: newState.length + 1,
          content: action.content,
          completed: false,
        },
      ];
      return newState;

    case "COMPLETED_TODO":
      const indexCompleted = newState.findIndex((todo) => todo.id === action.id);
      newState[indexCompleted].completed = !newState[indexCompleted].completed;
      return newState;

    case "DELETE_TODO":
      return newState.filter(todo => todo.id != action.id)
    default:
      return state;
  };
}
export default todosReducer;
