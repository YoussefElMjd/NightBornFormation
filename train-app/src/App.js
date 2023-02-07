import { useState } from "react";
const Anecdote = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <p>{props.anecdote}</p>
      <p>Has {props.vote} votes</p>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.from({ length: anecdotes.length }, () => 0)
  );

  const randomNumber = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1 - 0 + 1) + 0));
  };

  const vote = () => {
    setVotes((prev) => {
      const newArray = [...prev];
      newArray[selected]++;
      return newArray;
    });
  };

  const getPopularVote = () => {
    return votes.indexOf(Math.max(...votes));
  };
  return (
    <div>
      <Anecdote
        text="Anecdote of the day"
        anecdote={anecdotes[selected]}
        vote={votes[selected]}
      />
      <button onClick={vote}>vote</button>
      <button onClick={randomNumber}>next anecdote</button>

      <Anecdote
        text="Anecdote with most votes"
        anecdote={anecdotes[getPopularVote()]}
        vote={votes[getPopularVote()]}
      />
    </div>
  );
};

export default App;
