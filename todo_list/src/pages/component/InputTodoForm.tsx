interface InputTodoForm {
  id: number;
  title: string;
  description: string;
}
const Input = ({
  type,
  id,
  name,
}: {
  type: string;
  id: string;
  name: string;
}) => {
  return (
    <>
      <label htmlFor="name">{name}</label>
      <input type={type} id={id} name={name} />
      <br></br>
      <br></br>
    </>
  );
};
export default Input;
