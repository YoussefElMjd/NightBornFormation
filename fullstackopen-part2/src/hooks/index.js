import axios from "axios";
import { useState, useEffect } from "react";
export const useRessource = (baseUrl) => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setObjects(response);
    });
  }, []);

  const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
  };

  const create = (object) => {
    const request = axios.post(baseUrl, object);
    request.then((response) => setObjects(objects.concat(response.data)));
  };

  const update = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object);
    request.then((response) => response.data);
  };

  const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    console.log(id);
    return request.then((response) => {
      const newObjects = objects.filter((object) => object.id !== id);
      setObjects(newObjects);
    });
  };
  return [objects, { getAll, create, update, remove }];
};
