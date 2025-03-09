import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../../actions/todos";

function TodoList() {
  const todoList = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  const handleCompleted = (id) => {
    dispatch(completedTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((todo) => (
            <li key={todo.id} className="todo__item">
              <span
                className={
                  "todo_content " +
                  (todo.completed &&
                    "todo__content--completed")
                }
              >
                {todo.content}
              </span>
              {todo.completed ? (
                <button
                  onClick={() => handleCompleted(todo.id)}
                >
                  U
                </button>
              ) : (
                <button
                  onClick={() => handleCompleted(todo.id)}
                >
                  V
                </button>
              )}
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
