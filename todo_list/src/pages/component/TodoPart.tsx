import { useState } from "react";
import { Todo } from "..";
import "../../styles/index.module.css";
const TodoPart = ({ todo }: { todo: Todo }) => {
  const [todoElement, setTodoElement] = useState(todo);

  const toggleChecked = () => {
    let element = todoElement;
    element.checked = !element.checked;
    setTodoElement(element);
  };

  return (
    <>
      {todoElement ? (
        <>
          <h2>
            {todoElement.title}
            <input
              type="checkbox"
              value={String(todoElement.checked)}
              onChange={toggleChecked}
            />
          </h2>
          <p>todoElement.description</p>
        </>
      ) : (
        <h2>Nothing to do for the moment</h2>
      )}
    </>
  );
};

export default TodoPart;
