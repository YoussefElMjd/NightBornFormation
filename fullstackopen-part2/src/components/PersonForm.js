export const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPersons}>
      <div>
        name:{" "}
        <input value={props.newName} onChange={props.handleOnChangeName} />
      </div>
      <div>
        number:{" "}
        <input value={props.newNumber} onChange={props.handleOnChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
