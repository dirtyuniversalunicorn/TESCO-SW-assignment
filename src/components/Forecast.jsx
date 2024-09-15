import { useSearchContext } from "../providers/SearchProvider";

export default function Forecast() {
  const { fiveDayForecast } = useSearchContext();

  if (!fiveDayForecast) return null;

  return (
    <table className="forecast">
      {fiveDayForecast.map((item) => (
        <tbody className="forecast-table" key={item.day}>
          <tr>
            <th className="forecast-day">{item.day}</th>
          </tr>
          <tr className="temperature-wrapper">
            <td className="temperature-max">{Math.round(item.maxTemp)} °C</td>
            <td className="temperature-min">{Math.round(item.minTemp)} °C</td>
          </tr>
          {item.intervals.map((interval, index) => {
            return (
              <tr className="forecast-details" key={index}>
                <td className="interval">
                  <p>{interval.time}:00</p>
                </td>
                <td>
                  <img
                    alt="weather"
                    className="icon"
                    src={`icons/${interval.icon}.png`}
                  />
                </td>
                <td className="interval-temp">
                  <p>{Math.round(interval.temp)} °C</p>
                </td>
                <td className="interval-description">{interval.description}</td>
              </tr>
            );
          })}
        </tbody>
      ))}
    </table>
  );
}
