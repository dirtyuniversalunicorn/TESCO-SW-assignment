import { useSearchContext } from "../providers/SearchProvider";
import useCurrentDay from "../hooks/useCurrentDay";

export default function CurrentDayWeather() {
  const currentDay = useCurrentDay();
  const { currentWeather } = useSearchContext();

  if (!currentWeather) return null;

  return (
    <div className="currentweather">
      <div>
        <h2>{currentWeather.name}</h2>
        <p className="current-day">{currentDay}</p>
      </div>
      <div className="details">
        {currentWeather.main ? (
          <h1>{Math.round(currentWeather.main.temp)} °C</h1>
        ) : null}
        <div>
          <p className="label">Vlhkost</p>
          {currentWeather.main ? <p>{currentWeather.main.humidity} %</p> : null}
        </div>
        <div>
          <p className="label">Pocitová teplota</p>
          {currentWeather.main ? (
            <p>{Math.round(currentWeather.main.feels_like)} °C</p>
          ) : null}
        </div>
        <div>
          <p className="label">Viditelnost</p>
          {currentWeather.main ? <p>{currentWeather.visibility}</p> : null}
        </div>
      </div>
    </div>
  );
}
