const axios = require('axios');
const { API_KEY } = require('../config/config');
const { newWeatherObj } = require('../helpers/helpers');

module.exports = {
    async getWeather(req, res) {
        try {
            const city = req.body.city;
            if (!city) {
                return res.status(400).send({ error: 'Please add a city to search!' })
            } else {
                await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
                    .then(weatherData => {
                        let allWeather = weatherData.data;
                        const weather = newWeatherObj(allWeather);
                        res.status(200).send(weather);
                    })
                    .catch(err => {
                        res.status(404).send({ error: `${city} not found!` });
                    })
            }

        } catch (err) {
            console.log(err)
        }
    }
}
