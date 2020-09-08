import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeTemp } from './js/weather.js';
import { changeTime } from './js/weather.js';

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      const fahrenheit = changeTemp(response.main.temp);
      const time = changeTime(response.sys.sunrise, response.timezone);
      city = response.name;
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit is ${fahrenheit} degrees.`);
      $('.showWind').text(`The Wind speed in ${city} is ${response.wind.speed}mph`);
      $('.showSunrise').text(`The sunrise in ${city} is ${time}`);
    }
  });
});