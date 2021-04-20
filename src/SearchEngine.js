import React from "react";
import DateAndTime from "./DateAndTime";



export default function SearchEngine(props) {
    return (
        <div className="SearchEngine">
           <h1>
            
            {" "}{props.weatherData.city}
        </h1>
          <ul>
            <li></li>
            <DateAndTime date={props.weatherData.date} />
       
          </ul>
          <span className="temperature">{Math.round(props.weatherData.temperature)}°C</span>
          <div className="row">
            <div className="col-9">
              <ul>
                <li className="text-capitalize">Description: {props.weatherData.description}</li>
                <li> Humidity: {props.weatherData.humidity}%</li>
                <li>Wind: {props.weatherData.wind}km/h</li>
              </ul>
  
            </div>
          </div >
       </div>
    );
}