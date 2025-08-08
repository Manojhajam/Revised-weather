import React, { useState } from "react";
import Modal from "./Modal";

import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyforecastWidget from "./DailyforecastWidget";
import HorizontalScrollable from "./HorizontalScrollable";

const Forecast = ({ title, type, data }) => {

  // console.log(data)
const [showBookModal, setShowBookModal] = useState(false);

  return <div className="Forecast p-4">
      <div className="forecast-container">
        <h3 className="text-xl font-semibold mb">
          {title}
        </h3>
        <HorizontalScrollable className="flex gap-4 p-4">
        {data.map((singleData, index) => <div key={index}>
              {type === "hourly" ? <HourlyForecastWidget data={singleData} 
          /> : <DailyforecastWidget data={singleData}
            // handleClick={() => {
            //           setShowBookModal(true);
            // }}
          />}
            </div>)}
        </HorizontalScrollable>

        {/* <Modal open={showBookModal} onClose={() => {
            setShowBookModal(false);
          }} title="Show weather details">
          <div>{`Humidity: ${data?.humidity}`}</div>
        </Modal> */}
      </div>
    </div>;
};

export default Forecast;  
