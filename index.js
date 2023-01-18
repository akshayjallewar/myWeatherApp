const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '90316e9302mshe5fbfc7c6b94d99p1b89f7jsn17a1565bd71e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {


        console.log(response)        
        temp.innerHTML = response.temp;        
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
    })

    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
home.addEventListener("click", (event) => {
    event.preventDefault();
    getWeather("Nagpur");
});
about.addEventListener("click",event => {
    event.preventDefault();
    alert("This is a Weather App Designed to get weather details.\nEnter the City name and Get Started!!!");
});
getWeather("Nagpur");