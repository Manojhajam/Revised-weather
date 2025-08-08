import React, { useState } from "react";
import Icon from "../Icon/icon";
import { useWeather } from "../context/WeatherContext";
import Modal from "./Modal";

const DailyforecastWidget = ({ data, handleClick }) => {
  const [showDailyweather, setShowDailyweather] = useState(false);
  const { units } = useWeather();

  // Return early if no data
  if (!data) {
    return null;
  }
  const {
    day,
    icon,
    summary,
    temperature,
    temperature_max,
    temperature_min,
    wind,
    precipitation,
  } = data;
  console.log(data);

  //date format
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    weather_date.day === now_date.day ? "Today" : weather_date.day;

  return (
    <>
      <div
        className="daily hover:scale-[1.05] transition-transform duration-300 hover:shadow-2xl relative widget flex flex-col items-center justify-between p-4 bg-white  rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md min-w-[120px] mt-2"
        onClick={() => setShowDailyweather(true)}
      >
        <div className="day absolute -top-6  px-2 text-sm font-semibold rounded shadow ">
          {weather_date.day}
        </div>
        <div className="icon">
          <Icon iconNo={icon} summary={summary} />
        </div>
        <div className="temperature">
          <div className="max">
            {Math.round(temperature_max)}°{units === "metric" ? "C" : "F"}
          </div>
          <div className="min">
            {Math.round(temperature_min)}°{units === "metric" ? "C" : "F"}
          </div>
        </div>
        <div className="preciption">{Math.round(precipitation.total)} mm/h</div>
      </div>
      <Modal
        open={showDailyweather}
        onClose={() => {
          setShowDailyweather(false);
        }}
        title="Show weather details"
      >
        <div>{`Humidity: ${Math.round(data?.humidity)}°${
          units === "metric" ? "%" : "%"
        }`}</div>
        <div>{`Wind Speed: ${Math.round(data?.wind?.speed)}°${
          units === "metric" ? "C" : "F"
        }`}</div>
        <div>{`Feels_like: ${Math.round(data?.feels_like )}${
          units === "metric" ? "m/s" : "mph"
        }`}</div>
        <div>{`Humidity: ${Math.round(data?.humidity)}°${
          units === "metric" ? "C" : "F"
        }`}</div>

      </Modal>
    </>
  );
};

export default DailyforecastWidget;
