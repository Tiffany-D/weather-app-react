import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function ForecastDay(props){
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
        return`${temperature}°`;
        
    }

     function minTemperature(){
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
        
        <div className="day-forecast">
        {day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size="30" />
        <div className="temp">
        <span className="max"> {maxTemperature()}</span>{" "}
        <span className="min">{minTemperature()}</span>
        
        </div>
        </div>
        

    );
    
}

