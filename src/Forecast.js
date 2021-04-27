import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props){
    let [ready, setReady]= useState(false);
    let [forecastData, setForecastData]= useState(null);


    useEffect(()=> {
        setReady(false);
    }, [props.coordinates]);    


    function forecastResponse(response){
        setForecastData(response.data.daily);
        setReady(true);
console.log(response.data);
    }
   

    if (ready){
    return(
        <div className="ForecastWeather">
        <div className="row">
        {forecastData.map(function(dailyForecast, index){ 
        if (index < 4){ 
            return(
             <div className="col" key={index}>
          <ForecastDay data={dailyForecast} />  
          </div>
            ); 
    }
        } )}
       
       
</div>
        
        </div>
    );
}else{
     let apiKey="09fa0f7b1ffedeb38b6e5527906a4325";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(forecastResponse);
    return null;
}
}