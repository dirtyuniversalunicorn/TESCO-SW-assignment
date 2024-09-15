import { useState, useContext, createContext } from "react";
import axios from "axios";
import useUserLanguage from "../hooks/useUserLanguage";

const SearchContext = createContext(undefined);

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const weatherApi = "https://api.openweathermap.org/data/2.5";
const units = "metric";

export default function SearchProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  const language = useUserLanguage();

  async function findPlace({ lat, lon }) {
    const currentWeatherUrl = `${weatherApi}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${language}`;

    try {
      await axios.get(currentWeatherUrl).then((response) => {
        setCurrentWeather(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  }
  return (
    <SearchContext.Provider
      value={{
        findPlace,
        currentWeather,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider.");
  }

  return context;
}
