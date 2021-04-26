import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function Forecast(){
    return(
        <div className="Forecast">
        <div className="row">
        <div className="col">
        <div className="day">
        Thu</div>
        <WeatherIcon code="01d" size="30" />
        <div className="temp">
        <span className="max"> 19°</span>{" "}<span className="min">10°</span>
        
        </div>
        </div>
        </div>
        </div>

    );
}