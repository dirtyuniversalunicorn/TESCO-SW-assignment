import { useEffect, useState } from "react";
import axios from "axios";

export default function useCities() {
  const [cities, setCities] = useState([]);

  function getCities() {
    try {
      axios.get("/city.list.json").then((response) => {
        setCities(response.data);
      });
    } catch (error) {}
  }

  useEffect(() => {
    getCities();
  }, []);

  return cities;
}
