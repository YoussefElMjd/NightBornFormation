import { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import style from "@/styles/index.module.css";
import axios from "axios";

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
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Array<Todo>>("http://localhost:3001/todos")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  }, []);

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
      axios
        .post("http://localhost:3001/todos", newTodo)
        .then((response) => {
          setTodoList(todoList.concat(response.data));
          setTitle("");
          setDescription("");
        })
        .catch((error) => {
          setError(error.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    }
  };

  return (
    <div>
      <h1 className="title">Todo-List</h1>
      {error ? <h1 className="error">{error}</h1> : ""}
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
