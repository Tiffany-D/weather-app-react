import './AppDisplay.css';
import React, {useState} from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";




export default function WeatherApp(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);
  
  

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
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
      let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }
  function cityChange(event) {
    setCity(event.target.value);
  
  }
 
  if (weatherData.loaded) {
    return ( 
      <div className="WeatherApp">
      <h1>
            
            {" "}{weatherData.city}
        </h1>
          <ul>
            <li>
            <DateAndTime date={weatherData.date} />
       </li>
        </ul>
        <WeatherIcon code={weatherData.icon} />
        <WeatherTemperature celsius={weatherData.temperature} />
        
          <div className="row">
            <div className="col-9">
              <ul>
                <li className="text-capitalize">Description: {weatherData.description}</li>
                <li> Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div >
      
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5">
                <input type="search"
                  placeholder="Type a city..."
                  className="form-control" />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                  onChange={cityChange}/>
              </div>
            </div >
          </form>
          </div>
 
      
          
  );
  }else{



    return null;
    
}
  
}


