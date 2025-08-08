import React, { useState } from "react";
import { searchData } from "../../api/search-data";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

const Search = ({ setSelectedCityData }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const onCityChange = async city => {
    setSelectedCity(city);
    const data = searchData.find(data => data.name === city);

    setSelectedCityData(data);
  };

  const changePlace = place => {
    console.log("Selected place:", place);
    setText(place.name); // optionally update input
    setOpenSearchResults(false);
    // You might want to lift state or use context to set selected place
  };

  return (
    <div className="relative">
      <div className="search-container">
        <div className="search-input relative">
          <SelectSearch
            options={searchData.map(data => ({ ...data, value: data.name }))}
            value={selectedCity}
            placeholder="Choose your city"
            onChange={onCityChange}
            search
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
