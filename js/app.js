// do not show api key on your js file
const API_KEY = `c1c742a865dca4d4537375d5af317993`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}`;
    fetch (url)
    .then(res => res.json())
    .then(data => console.log(data));
}

loadTemperature('dhaka')