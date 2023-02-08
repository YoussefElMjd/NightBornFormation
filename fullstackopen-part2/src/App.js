import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import { getAll, create, update, deletePhoneBook } from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState([]);
  const [readFilter, setReadFilter] = useState("");

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response);
    });
  }, []);

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
        update(person.id, { ...person, number: newNumber });
    } else if (persons.some((object) => object.number === newNumber)) {
      const person = persons.find((person) => person.number === newNumber);
      if (window.confirm("Are you sure you want to update"))
        update(person.id, { ...person, name: newName });
    } else {
      create(newPersons);
      setPersons(persons.concat(newPersons));
      setNewName("");
      setNewNumber("");
    }
  };

  const deletePersons = (event) => {
    if (window.confirm("Are you sure you want to delete"))
      deletePhoneBook(event.target.value).then(() => {
        setPersons(persons.filter((object) => object.id !== event.target.value));
      });
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
          id={persons.id}
          deletePersons={deletePersons}
        />
      ))}
    </div>
  );
};

export default App;
