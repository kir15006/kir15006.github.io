// current weather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector('#currently').textContent = jsObject.weather[0].description;
        document.querySelector('#currentTemp').textContent = Math.round(jsObject.main.temp);
        document.querySelector('#highTemp').textContent = Math.round(jsObject.main.temp_max);
        document.querySelector('#humidity').textContent = jsObject.main.humidity;
        document.querySelector('#windSpeed').textContent = Math.round(jsObject.wind.speed);
    });


// forcast 
const forcastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

fetch(forcastApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let count = 0;
        var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
        jsObject.list.forEach(element => {
            // check for same time each day
            if(element.dt_txt.includes('18:00:00')){
                // set lable to correct day
                document.querySelector('#forcastDay' + count).textContent = (dayNames[new Date(element.dt_txt.slice(0, 10)).getDay()]);

                // set temp for each day
                document.querySelector('#forcast' + count).textContent = Math.round(element.main.temp_max) + " °F";

                // set icon for each day
                document.querySelector('#forcastimg' + count).setAttribute('src', "http://openweathermap.org/img/wn/" + element.weather[0].icon + ".png")
                count = count + 1;
            };
        });
    });