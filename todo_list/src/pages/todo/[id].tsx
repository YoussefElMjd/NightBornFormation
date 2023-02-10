import getAllTodoIds, { getTodoData } from "@/lib/todo";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { Todo } from "..";

const TodoData = ({ id, title, description, checked }: Todo) => {
  return (
    <>
      <h1>Id: {id}</h1>
      <h1>Titre: {title}</h1>
      <h1>Description: {description}</h1>
      <h1>Checked : {checked ? "true" : "false"}</h1>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  try {
    const paths = await getAllTodoIds();
    return { paths, fallback: false };
  } catch (e) {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const todoData = await getTodoData(params?.id as string);
    return {
      props: {
        id: todoData?.id,
        title: todoData?.title,
        description: todoData?.description,
        checked: todoData?.checked,
      },
    };
  } catch (e) {
    return { props: {}, revalidate: 0 };
  }
};

export default TodoData;
