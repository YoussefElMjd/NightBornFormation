export const ErrorMessage = ({ message, color, background }) => {
  if (message === "") return null;
  const errorStyle = {
    color: color,
    background: background,
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return (
    <div style={errorStyle}>
      <h1>{message}</h1>
    </div>
  );
};
