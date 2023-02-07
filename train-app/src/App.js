import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.increment}> {props.react.name}</button>;
};

const Stats = (props) => {
  return <p>{props.name + " " + props.click}</p>;
};
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState({ name: "good", click: 0 });
  const [neutral, setNeutral] = useState({ name: "neutral", click: 0 });
  const [bad, setBad] = useState({ name: "bad", click: 0 });

  return (
    <div>
      <h1> give feedback</h1>
      <Button react={good} increment={() => setGood({...good,click : good.click+1})} />
      <Button react={neutral} increment={() => setNeutral({...neutral,click : neutral.click+1})} />
      <Button react={bad} increment={() => setBad({...bad,click : bad.click+1})} />

      <h1>statistics</h1>
      <Stats name={good.name} click={good.click} />
      <Stats name={neutral.name} click={neutral.click} />
      <Stats name={bad.name} click={bad.click} />
    </div>
  );
};

export default App;
