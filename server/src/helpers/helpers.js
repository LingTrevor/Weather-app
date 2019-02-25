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

        //Unix time to date
        weatherObj.dt = convertUnixTime(weatherObj.dt);
        weatherObj.sys.sunrise = convertUnixTime(weatherObj.sys.sunrise);
        weatherObj.sys.sunset = convertUnixTime(weatherObj.sys.sunset);

        //Return new weather object
        return weatherObj;

        // const weatherObj = {};
        // const weather = data.weather;
        // weatherObj.weather = weather;
        // console.log(weatherObj);
    }
};

function kelvinToCelcius(kelvinTemp) {
    const celciusTemp = Math.round(kelvinTemp - 273.15);
    return celciusTemp;
};

function convertUnixTime(time) {
    const date = new Date(time * 1000).toLocaleString();
    return date;
};