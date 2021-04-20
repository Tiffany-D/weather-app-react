import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './WeatherApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp defaultCity="London" />
    <footer>
      Coded by TiffanyD. and is{" "}<a href="https://github.com/Tiffany-D/weather-app-react">open-sourced on
      Github</a>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
