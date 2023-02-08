import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { Countries } from "./components/Countries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    if (searchFilter !== "")
      axios
        .get(`https://restcountries.com/v3.1/name/${searchFilter}`)
        .then((response) => {
          if (response.data.length > 10) {
            setErrorMessage("To many response give more detail");
            setCountries([]);
          } else {
            setErrorMessage("");
            setCountries(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }, [searchFilter]);

  const handleOnChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleOnClick = (event) => {
    setSearchFilter(event.target.value);
  };
  return (
    <div>
      <Filter readFilter={searchFilter} handleOnChange={handleOnChange} />
      <h3>{error}</h3>
      <Countries countries={countries} handleOnClick={handleOnClick} />
    </div>
  );
};
export default App;
