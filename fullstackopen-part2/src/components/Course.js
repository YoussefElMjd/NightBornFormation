const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  );
};

export const Course = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
      {props.course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
      <p>Somme ={props.sommePart(props.course.parts)}</p>
    </div>
  );
};

export default Course;
