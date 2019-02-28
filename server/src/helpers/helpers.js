module.exports = {
    newWeatherObj(data) {
        //Take weather data from data
        const { weather, main, wind, clouds, dt, sys, name } = data;

        // Convert kelvin temperature to celcius temperature
        main.temp = kelvinToCelcius(main.temp);
        main.temp_min = kelvinToCelcius(main.temp_min);
        main.temp_max = kelvinToCelcius(main.temp_max);

        // Add new data to weather object
        const weatherObj = {
            weather,
            main,
            wind,
            clouds,
            dt,
            sys,
            name
        };

        //Unix time to date / Date - dt / Time - Sunrise and Sunset
        weatherObj.dt = convertUnixTime(weatherObj.dt);
        weatherObj.dt = formatDate(weatherObj.dt);
        weatherObj.sys.sunrise = convertUnixTime(weatherObj.sys.sunrise);
        weatherObj.sys.sunset = convertUnixTime(weatherObj.sys.sunset);
        weatherObj.sys.sunrise = `Sunrise: ${getTime(weatherObj.sys.sunrise)}`;
        weatherObj.sys.sunset = `Sunset: ${getTime(weatherObj.sys.sunset)}`;

        //Return new weather object
        return weatherObj;
    }
};

function kelvinToCelcius(kelvinTemp) {
    const celciusTemp = Math.round(kelvinTemp - 273.15);
    return `${celciusTemp}°`;
};

function convertUnixTime(time) {
    const date = new Date(time * 1000);
    return date;
};

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
};

function getTime(date) {
    const minutes = date.getMinutes();
    const hours = date.getHours();

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};