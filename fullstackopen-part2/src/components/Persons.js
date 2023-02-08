export const Persons = (props) => {
  return (
    <h3>
      {props.name} {props.number} <button value={props.id} onClick={props.deletePersons}>delete</button>
    </h3>
  );
};
