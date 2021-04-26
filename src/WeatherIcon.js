import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props) {
    
        let codeIcons = {
            "01d": "CLEAR_DAY",
            "01n": "CLEAR_NIGHT",
            "02d": "PARTLY_CLOUDY_DAY",
            "02n": "PARTLY_CLOUDY_NIGHT",
            "03d": "WIND",
            "03n": "WIND",
            "04d": "CLOUDY",
            "04n": "CLOUDY",
            "09d": "RAIN",
            "09n": "RAIN",
            "10d": "RAIN",
            "10n": "RAIN",
            "11d": "CLEAR_DAY",
            "11n": "CLEAR_DAY",
            "13d": "SNOW",
            "13n": "SNOW",
            "50d": "FOG",
            "50n": "FOG"
        };
    return (
        <div>
        <ReactAnimatedWeather
            icon={codeIcons[props.code]}
            color="#f7aa00"
            size={props.size}
            animated={true}
            />
        </div>
    );
        
}

