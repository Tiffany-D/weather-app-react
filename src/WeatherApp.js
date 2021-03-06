import './WeatherApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";




export default function WeatherApp(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);
  
  

    function handleResponse(response) {
   

      setWeatherData({
        date: new Date(response.data.dt*1000),
        loaded:true,
        temperature: response.data.main.temp,
        coordinates:response.data.coord,
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
      <div className="container-fluid">
      <div className="WeatherApp">
        
        <div className="card" max-width="18rem">
          <div className="card-body">
        <form  onSubmit={handleSubmit}>
   
                 <div className="row">
          <div className="col-8 d-flex justify-content-center">
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
            
<i class="fas fa-search-location fs-2"></i>
{" "}{weatherData.city}
        </h1>
        <div className="day">
            <DateAndTime date={weatherData.date} />
            <br />
            </div>
        <div className="row">
                <div className="col-6">
                  <div className="temp-icon">
              
                    <WeatherIcon code={weatherData.icon} size="80" />
                    </div>
                  <div className="weathertemp">
                  
                      <WeatherTemperature celsius={weatherData.temperature} />
                    
                   </div> 
             </div> 
   
        
        
            </div>
            
             
           <div className="row">
          <div className="col-12">
            <div className="right">
              <ul className="list">
                <li className="text-capitalize">Description:{weatherData.description}</li>
                <li className="humidity"> Humidity: {weatherData.humidity}%</li>
                <li className="wind">Wind: {weatherData.wind}km/h</li>
              </ul>
              
              <br/>
              <br/>
              <br/>
              <br/>
                    <br />
          <div className="d-flex justify-content-center">
              <Forecast coordinates={weatherData.coordinates}/></div>
</div>
      
        
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


