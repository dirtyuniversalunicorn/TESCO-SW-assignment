import daysOfWeek from "../constants/daysOfWeek";

export default function modifyForecastData(data) {
  const groupedData = [];

  data.map((entry) => {
    const dayNumber = new Date(entry.dt_txt).getDay();
    const dayName = daysOfWeek[dayNumber];
    const findDay = groupedData.findIndex(({ day }) => dayName === day);
    if (findDay === -1) {
      groupedData.push({ day: dayName, intervals: [entry] });
    } else {
      groupedData[findDay].intervals.push(entry);
    }
  });

  const finalData = groupedData.map((group) => {
    const maxTemps = group.intervals.map((interval) => interval.main.temp_max);
    const minTemps = group.intervals.map((interval) => interval.main.temp_min);
    const intervals = group.intervals.map((interval) => {
      return {
        time: new Date(interval.dt_txt).getHours(),
        temp: interval.main.temp,
        icon: interval.weather[0].icon,
        description: interval.weather[0].description,
      };
    });

    return {
      day: group.day,
      maxTemp: Math.max(...maxTemps),
      minTemp: Math.min(...minTemps),
      intervals,
    };
  });

  return finalData;
}
