import { useState } from "react";
export const useFilter = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const onChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const onClick = (event) => {
    setSearchFilter(event.target.value);
  };

  return { searchFilter, onChange, onClick };
};
