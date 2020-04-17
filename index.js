const request = require('request');
let apiKey = '5093389008109e4b3678b85075afafff';
let city = 'huntersville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
})