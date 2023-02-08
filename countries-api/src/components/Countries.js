export const Countries = ({ countries, handleOnClick }) => {
  if (countries.length === 1) {
    return (
      <>
        {countries.map((country) => {
          return (
            <div key={country.cca2}>
              <h1>{country.name.common}</h1>
              <p>capital {country.capital[0]}</p>
              <p>area {country.area}</p>
              <h3>languages</h3>
              <ol>
                {Object.entries(country.languages).map((language) => {
                  return <li key={language[0]}>{language[1]}</li>;
                })}
              </ol>
              <img src={country.flags.png} alt={country.flags.alt}></img>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.cca2}>
            <p>
              {country.name.common}
              <button value={country.name.common} onClick={handleOnClick}>
                show
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};
