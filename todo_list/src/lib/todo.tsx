import { Todo } from "@/pages";

const getAllTodoIds = async () => {
  const res = await fetch(`http://localhost:3001/todos/`);
  const json: Array<Todo> = await res.json();
  return json.map((id) => ({
    params: { id: `${id.id}` },
  }));
};

export const getTodoData = async (value: string) => {
  const res = await fetch(`http://localhost:3001/todos/`);
  const json: Array<Todo> = await res.json();
  return json.find((item) => item.id === Number(value));
};
export default getAllTodoIds;
