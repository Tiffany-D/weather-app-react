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
    </div>
    </div>
      </form>
  );
}


