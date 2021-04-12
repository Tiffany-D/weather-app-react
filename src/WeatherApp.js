import './WeatherApp.css';
import React from "react";

export default function WeatherApp() {
  return (
    <div className="card">
      <div className="card-body">
    <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
      <input type="search"
        placeholder="Type a city..."
        className="form-control"/>
      </div>
    <div className="col-3">
      <input 
      type="submit"
      value="Search"
      className="btn btn-primary"/>
    </div >
      </div >
       </form> 
        <h1>London</h1>
  <ul>
        <li>Saturday, 12 April 15:20</li>
       
          </ul>
          <span className="temperature">14°C</span>
  <div className="row">
            <div className="col-8">
              <ul>
                <li>Description: Sunny</li>
                <li> Humidity: 30%</li>
                <li>Wind: 7km/h</li>
              </ul>
  
</div>
    </div >
        </div>
      </div>
    </div>
  );
}


