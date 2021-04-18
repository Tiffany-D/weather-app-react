import './AppDisplay.css';
import React, {useState} from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";


export default function WeatherApp(props) {
  let [weatherData, setWeatherData] = useState({loaded: false});
  
  

    function handleResponse(response) {
   

      setWeatherData({
        date: new Date(response.data.dt*1000),
        loaded:true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        city: response.data.name,
      
      });
      
    
    }
 
  if (weatherData.loaded) {
    return ( 
      <div container>
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-5">
                <input type="search"
                  placeholder="Type a city..."
                  className="form-control" />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary" />
              </div>
            </div >
          </form>
          <h1>
            
            {" "}{weatherData.city}
        </h1>
          <ul>
            <li></li>
            <DateAndTime date={weatherData.date} />
       
          </ul>
          <span className="temperature">{Math.round(weatherData.temperature)}°C</span>
          <div className="row">
            <div className="col-9">
              <ul>
                <li className="text-capitalize">Description: {weatherData.description}</li>
                <li> Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
  
            </div>
          </div >
        </div>
      </div>
  );
  }else{


  let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
   
}
  
}


