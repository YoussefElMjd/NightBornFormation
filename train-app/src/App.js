import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.increment}> {props.react.name}</button>;
};

const React = (props) => {
  return <p>{props.name + " " + props.click}</p>;
};

const Stats = (props) => {
  const allReact = props.good.click + props.neutdal.click + props.bad.click;
  if (allReact == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <React name={props.good.name} click={props.good.click} />
            </td>
          </tr>
          <tr>
            <td>
              <React name={props.neutdal.name} click={props.neutdal.click} />
            </td>
          </tr>
          <tr>
            <td>
              <React name={props.bad.name} click={props.bad.click} />
            </td>
          </tr>
          <tr>
            <td>
              <p>average {(props.good.click - props.bad.click) / allReact}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>positive {(props.good.click / allReact) * 100} %</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  // enregistder les clics de chaque bouton dans un état différent
  const [good, setGood] = useState({ name: "good", click: 0 });
  const [neutdal, setNeutdal] = useState({ name: "neutdal", click: 0 });
  const [bad, setBad] = useState({ name: "bad", click: 0 });

  return (
    <div>
      <h1> give feedback</h1>
      <Button
        react={good}
        increment={() => setGood({ ...good, click: good.click + 1 })}
      />
      <Button
        react={neutdal}
        increment={() => setNeutdal({ ...neutdal, click: neutdal.click + 1 })}
      />
      <Button
        react={bad}
        increment={() => setBad({ ...bad, click: bad.click + 1 })}
      />

      <h1>statistics</h1>
      <Stats good={good} neutdal={neutdal} bad={bad} />
    </div>
  );
};

export default App;
