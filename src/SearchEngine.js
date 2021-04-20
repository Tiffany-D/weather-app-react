import React from "react";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



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
        <WeatherIcon code={props.data.icon} />
        <WeatherTemperature celsius={props.data.temperature} />
        
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