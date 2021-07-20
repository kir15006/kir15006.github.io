// current weather
const apiURL_gilbert = "https://api.openweathermap.org/data/2.5/weather?id=5295903&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

fetch(apiURL_gilbert)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector('#currently_gilbert').textContent = jsObject.weather[0].description;
        document.querySelector('#currentTemp_gilbert').textContent = Math.round(jsObject.main.temp);
        document.querySelector('#highTemp_gilbert').textContent = Math.round(jsObject.main.temp_max);
        document.querySelector('#humidity_gilbert').textContent = jsObject.main.humidity;
        document.querySelector('#windSpeed_gilbert').textContent = Math.round(jsObject.wind.speed);
    });

    const apiURL_snowflake = "https://api.openweathermap.org/data/2.5/weather?id=5314943&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

    fetch(apiURL_snowflake)
        .then((response) => response.json())
        .then((jsObject) => {
            document.querySelector('#currently_snowflake').textContent = jsObject.weather[0].description;
            document.querySelector('#currentTemp_snowflake').textContent = Math.round(jsObject.main.temp);
            document.querySelector('#highTemp_snowflake').textContent = Math.round(jsObject.main.temp_max);
            document.querySelector('#humidity_snowflake').textContent = jsObject.main.humidity;
            document.querySelector('#windSpeed_snowflake').textContent = Math.round(jsObject.wind.speed);
        });

        const apiURL_gila_valley = "https://api.openweathermap.org/data/2.5/weather?id=5317170&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

        fetch(apiURL_gila_valley)
            .then((response) => response.json())
            .then((jsObject) => {
                document.querySelector('#currently_gila_valley').textContent = jsObject.weather[0].description;
                document.querySelector('#currentTemp_gila_valley').textContent = Math.round(jsObject.main.temp);
                document.querySelector('#highTemp_gila_valley').textContent = Math.round(jsObject.main.temp_max);
                document.querySelector('#humidity_gila_valley').textContent = jsObject.main.humidity;
                document.querySelector('#windSpeed_gila_valley').textContent = Math.round(jsObject.wind.speed);
            });

            const apiURL_tucson = "https://api.openweathermap.org/data/2.5/weather?id=5318313&units=imperial&appid=89cee548a3df9c3f2b4ab9c1480baa99";

            fetch(apiURL_tucson)
                .then((response) => response.json())
                .then((jsObject) => {
                    document.querySelector('#currently_tucson').textContent = jsObject.weather[0].description;
                    document.querySelector('#currentTemp_tucson').textContent = Math.round(jsObject.main.temp);
                    document.querySelector('#highTemp_tucson').textContent = Math.round(jsObject.main.temp_max);
                    document.querySelector('#humidity_tucson').textContent = jsObject.main.humidity;
                    document.querySelector('#windSpeed_tucson').textContent = Math.round(jsObject.wind.speed);
                });