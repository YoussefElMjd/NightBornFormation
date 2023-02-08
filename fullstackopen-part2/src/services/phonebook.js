import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPhoneBook) => {
  const request = axios.post(baseUrl, newPhoneBook);
  return request.then((response) => response.data);
};

const update = (id, newPhoneBook) => {
  const request = axios.put(`${baseUrl}/${id}`, newPhoneBook);
  return request.then((response) => response.data);
};

const deletePhoneBook = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};
export { getAll, create, update, deletePhoneBook };
