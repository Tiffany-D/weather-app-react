import './WeatherApp.css';
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
                  placeholder="Enter a city..."
                className="form-control"
              onChange={cityChange}
              />
              </div>
                <div className="col-3">
                
           <input
                  type="submit"
                  value="Search"
                className="btn btn-primary"
                
                  />
         
            
              
            </div> 
             </div>       
              </form>
          
            
          
      <h1>
            
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>{" "}{weatherData.city}
        </h1>
        <div className="day">
            <DateAndTime date={weatherData.date} />
            <br />
            <br />
            <br />
            </div>
        <div className="row">
              <div className="col-2">
                
        <WeatherIcon code={weatherData.icon} />
        
        </div>
            </div>
            
                <div className="temp">
                <WeatherTemperature celsius={weatherData.temperature} />
             </div>
           <div className="row">
          <div className="col-12">
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


