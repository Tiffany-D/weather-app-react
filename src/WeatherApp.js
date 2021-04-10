import './App.css';

export default function WeatherApp() {
  return (
    <div className="Weather"
      <form>
      <div className="row"
        <div className="col-9"
      <input type="search"
        placeholder="Type a city..."
        className="form-control"/>
      </div>
    <div className="col-3"
      <input 
      type="submit"
      value="Search"
      className="btn btn-primary"/>
    </div >
      </div >
      </form >
        <h1>London</h1>
  <ul>
        <li>Saturday 15:20</li>
        <li>Description: Sunny</li>
  </ul>
  <div className="row"
        <div className="col-6"
      <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/weather-icon.png"/>
  14°C
  </div >
    <div className="col-6"
    <ul>
    <li> Humidity: 30%</li>
    <li>Wind: 7km/h</li>
    </ul>
  </div >
    </div >
      </div>
  );
}


