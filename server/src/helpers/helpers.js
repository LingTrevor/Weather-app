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

        //Replace icon with icon picture link.
        let icon = weatherObj.weather[0].icon;
        weatherObj.weather[0].icon = addConditionImgLink(icon);

        //Return new weather object
        return weatherObj;
    }
};

kelvinToCelcius = (kelvinTemp) => {
    const celciusTemp = Math.round(kelvinTemp - 273.15);
    return `${celciusTemp}°`;
};

convertUnixTime = (time) => {
    const date = new Date(time * 1000);
    return date;
};

formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
};

getTime = (date) => {
    const minutes = date.getMinutes();
    const hours = date.getHours();

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

addConditionImgLink = (icon) => {
    const conditionImages = {
        "clear": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-icon.png",
        "moon": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-night-icon.png",
        "fewClouds": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clouds-icon.png",
        "clouds": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-many-clouds-icon.png",
        "brokenClouds": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clouds-night-icon.png",
        "snow": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-snow-icon.png",
        "snowNight": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-snow-scattered-night-icon.png",
        "rain": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-day-icon.png",
        "showerRain": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-icon.png",
        "nightRain": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-night-icon.png",
        "thunder": "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-storm-icon.png",
        "foggy": "http://icons.iconarchive.com/icons/icons-land/weather/256/Fog-icon.png",
        "greatDay": "http://www.clipartroo.com/images/53/this-is-the-day-clipart-53081.png"
    }

    if (icon === "01d") {
        icon = conditionImages.clear;
        return icon;
    }
    else if (icon === "01n") {
        icon = conditionImages.moon;
        return icon;
    }
    else if (icon === "02d") {
        icon = conditionImages.fewClouds;
        return icon;
    }
    else if (icon === "02n") {
        icon = conditionImages.brokenClouds;
        return icon;
    }
    else if (icon === "03d") {
        icon = conditionImages.clouds;
        return icon;
    }
    else if (icon === "03n") {
        icon = conditionImages.clouds;
        return icon;
    }
    else if (icon === "04d") {
        icon = conditionImages.brokenClouds;
        return icon;
    }
    else if (icon === "04n") {
        icon = conditionImages.brokenClouds;
        return icon;
    }
    else if (icon === "09d") {
        icon = conditionImages.showerRain;
        return icon;
    }
    else if (icon === "09n") {
        icon = conditionImages.nightRain;
        return icon;
    }
    else if (icon === "10d") {
        icon = conditionImages.rain;
        return icon;
    }
    else if (icon === "10n") {
        icon = conditionImages.nightRain;
        return icon;
    }
    else if (icon === "11d") {
        icon = conditionImages.thunder;
        return icon;
    }
    else if (icon === "11n") {
        icon = conditionImages.thunder;
        return icon;
    }
    else if (icon === "13d") {
        icon = conditionImages.snow;
        return icon;
    }
    else if (icon === "13n") {
        icon = conditionImages.snowNight;
        return icon;
    }
    else if (icon === "50d") {
        icon = conditionImages.foggy;
        return icon;
    }
    else if (icon === "50n") {
        icon = conditionImages.foggy;
        return icon;
    } else {
        icon = conditionImages.greatDay;
        return icon;
    }
}
