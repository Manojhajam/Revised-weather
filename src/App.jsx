import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Body";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "./Components/context/ThemeProvider";
import WeatherProvider from "./Components/context/WeatherContext";
// import { ThemeContext } from "./Components/context/theme_context";
import { ToastContainer } from "react-toastify";

const App = () => {
  // const { dark } = useContext(ThemeContext);

  return (
    <div className="">
      <WeatherProvider>
        <ThemeProvider>
          <Header />
          <Main />
        </ThemeProvider>
      </WeatherProvider>

      <ToastContainer/>
    </div>
  );
};
export default App;
