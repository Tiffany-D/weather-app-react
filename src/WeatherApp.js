import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        icon: response.data.weather[0].icon
      
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
        <div className="card">
          <div className="card-body">
        <form  onSubmit={handleSubmit}>
   
                 <div className="row">
          <div className="col-6">
         <input type="search"
                  placeholder="Type a city..."
                className="form-control"
              onChange={cityChange}
              />
              
                  <div className="col-20">
           <input
                  type="submit"
                  value="Search"
                className="btn btn-primary"
                
                  />
         
            </div>
              
            </div> 
             </div>       
              </form>
          
            
          
      <h1>
            
            {" "}{weatherData.city}
        </h1>
        
        <DateAndTime date={weatherData.date} />
        <div className="row">
          <div className="col-6">
        <WeatherIcon code={weatherData.icon} />
        <WeatherTemperature celsius={weatherData.temperature} />
        </div>
        </div>
           <div className="row">
          <div className="col-7">
            <div className="right">
              <ul className="list">
                <li className="text-capitalize">Description: {weatherData.description}</li>
                <li> Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
        </div>
      </div>
      </div>
        </div>
      </div>
      </div>    
  );
  } else {
    search();
return null;
    
}
  
}


