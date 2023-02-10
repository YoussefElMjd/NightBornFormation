import { Todo } from "..";
import TodoPart from "./TodoPart";
import "../../styles/index.module.css"
const TodoList = ({ todoList }: { todoList: Array<Todo> }) => {
    return (
      <>
        {todoList.length == 0 ? (
          <h2>Nothing to do for the moment</h2>
        ) : (
          <ul className="tilesWrap">
            {todoList.map((todo: Todo) => (
              <li key={todo.id}>
                <TodoPart todo={todo} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

export default TodoList;