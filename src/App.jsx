import "./App.css";
import CurrentDayWeather from "./components/CurrentDayWeather";
import SearchPlace from "./components/SearchPlace";

function App() {
  return (
    <main className="layout">
      <h1>Tvoje počasí</h1>
      <SearchPlace />
      <CurrentDayWeather />
    </main>
  );
}

export default App;
