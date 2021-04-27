import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props){
    function maxTemp(){
        let temperature=Math.round(props.data.temp.max);
        return`${temperature}°`;
        
    }

     function minTemp(){
        let temperature=Math.round(props.data.temp.min);
        return`${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day= date.getDay();
        let days =["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    
    return(
         <div className="Forecast">
        
        <div className="day">
        {day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size="30" />
        <div className="temp">
        <span className="max"> {maxTemp()}</span>{" "}<span className="min">{minTemp()}</span>
        
        </div>
        </div>
        

    );
    
}

