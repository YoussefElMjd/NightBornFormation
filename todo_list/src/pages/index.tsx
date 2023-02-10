import { useState } from "react";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import style from "@/styles/index.module.css";

export interface Todo {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}

let uniqId: number = 0;
const generateSequentialId = (): number => {
  return uniqId++;
};

const App = () => {
  const [todoList, setTodoList] = useState(Array<Todo>);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handelOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handelOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: generateSequentialId(),
      title: title,
      description: description,
      checked: false,
    };
    if (newTodo.title !== "") {
      setTodoList(todoList.concat(newTodo));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <TodoList todoList={todoList} />
      <TodoForm
        onSubmit={handleOnSubmit}
        onChangeTitle={handelOnChangeTitle}
        onChangeDescription={handelOnChangeDescription}
        title={title}
        description={description}
      />
    </div>
  );
};

export default App;
