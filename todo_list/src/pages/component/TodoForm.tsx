interface TodoFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  description: string;
}

const TodoForm = ({
  onSubmit,
  onChangeTitle,
  onChangeDescription,
  title,
  description,
}: TodoFormProps) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={onChangeTitle}
        value={title}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={onChangeDescription}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
