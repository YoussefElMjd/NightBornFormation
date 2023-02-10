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
      <h2>
        {todoElement.title}{" "}
        <input
          type="checkbox"
          value={String(todoElement.checked)}
          onChange={toggleChecked}
        />
      </h2>
      <p>{todoElement.description}</p>
    </>
  );
};

export default TodoPart;
