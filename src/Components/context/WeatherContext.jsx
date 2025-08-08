import React, { createContext, useContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [units, setUnits] = useState("metric");
  const [selectedCityData, setSelectedCityData] = useState();

  return (
    <WeatherContext.Provider
      value={{
        units,
        setUnits,
        selectedCityData,
        setSelectedCityData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the weather context
export const useWeather = () => {
  const { units, setUnits, selectedCityData, setSelectedCityData } = useContext(
    WeatherContext
  );
  if (!units && setUnits) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return { units, setUnits, selectedCityData, setSelectedCityData };
};

export default WeatherProvider;
