import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState([]);
  const [readFilter, setReadFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  },[]);
  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleOnChangeFilter = (event) => {
    const personsToShow = persons.filter((persons) =>
      persons.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilter(personsToShow);
    setReadFilter(event.target.value);
  };

  const addPersons = (event) => {
    event.preventDefault();
    const newPersons = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((object) => object.name === newName)) {
      alert(`${newPersons.name} is already added to phonebok`);
    } else if (persons.some((object) => object.number === newNumber)) {
      alert(`${newPersons.number} is already added to numbers`);
    } else {
      setPersons(persons.concat(newPersons));
      setNewName("");
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter readFilter={readFilter} handleOnChange={handleOnChangeFilter} />
      <h1>Add a new</h1>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleOnChangeNumber={handleOnChangeNumber}
        handleOnChangeName={handleOnChangeName}
        addPersons={addPersons}
      />
      <h2>Numbers</h2>
      {filter.map((persons, i) => (
        <Persons
          key={persons.number}
          name={persons.name}
          number={persons.number}
        />
      ))}
    </div>
  );
};

export default App;
