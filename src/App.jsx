import "./App.css";
import CurrentDayWeather from "./components/CurrentDayWeather";
import Forecast from "./components/Forecast";
import SearchPlace from "./components/SearchPlace";

function App() {
  return (
    <main className="layout">
      <h1>Tvoje počasí</h1>
      <SearchPlace />
      <CurrentDayWeather />
      <Forecast />
    </main>
  );
}

export default App;
