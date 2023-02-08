import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import { ErrorMessage } from "./components/Error";
import { useRessource } from "./hooks/index";

const App = () => {
  const [persons, service] = useRessource("http://localhost:3001/persons");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState([]);
  const [readFilter, setReadFilter] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      const person = persons.find((person) => person.name === newName);
      if (window.confirm("Are you sure you want to update"))
        service.update(person.id, { ...person, number: newNumber });
    } else if (persons.some((object) => object.number === newNumber)) {
      const person = persons.find((person) => person.number === newNumber);
      if (window.confirm("Are you sure you want to update"))
        service.update(person.id, { ...person, name: newName });
    } else {
      service.create(newPersons);
      setNewName("");
      setNewNumber("");
      setSuccessMessage(`Added successfully for ${newPersons.name}`);
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  const deletePersons = (event) => {
    if (window.confirm("Are you sure you want to delete"))
      service.remove(event.target.value).catch((e) => {
        setError(
          `Information of ${event.target.value} has already been removed from server`
        );
        setTimeout(() => setError(""), 5000);
      });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorMessage message={error} color="red" background="lightred" />
      <ErrorMessage
        message={successMessage}
        color="green"
        background="lightgreen"
      />
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
          id={persons.id}
          deletePersons={deletePersons}
        />
      ))}
    </div>
  );
};

export default App;
