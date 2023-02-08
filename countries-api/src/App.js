import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { Countries } from "./components/Countries";
import { useFilter } from "./hooks/index";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const searchFilter = useFilter();
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    if (searchFilter.searchFilter !== "")
      axios
        .get(`https://restcountries.com/v3.1/name/${searchFilter.searchFilter}`)
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
  }, [searchFilter.searchFilter]);

  return (
    <div>
      <Filter
        readFilter={searchFilter.searchFilter}
        handleOnChange={searchFilter.onChange}
      />
      <h3>{error}</h3>
      <Countries countries={countries} handleOnClick={searchFilter.onChange} />
    </div>
  );
};
export default App;
