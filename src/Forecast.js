import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(){
    return(
        <div className="Forecast">
        <div className="row">
        <div className="col">
        <div className="day">
        Thu
        <WeatherIcon code="01d"/>
        <div className="temp">
        <span className="max"> 19°</span><span className="min">10°</span>
        </div>
        </div>
        </div>
        </div>
        </div>

    );
}