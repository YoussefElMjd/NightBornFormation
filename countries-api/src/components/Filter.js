export const Filter = (props) => {
  return (
    <div>
      filter shown with <input value={props.readFilter} onChange={props.handleOnChange} />
    </div>
  );
};
