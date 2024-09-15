import daysOfWeek from "../constants/daysOfWeek";

export default function useCurrentDay() {
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];
  return currentDay;
}
