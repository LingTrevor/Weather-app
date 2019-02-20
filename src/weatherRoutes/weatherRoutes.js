const express = require('express');
const router = express.Router();
const axios = require('axios')
const { API_KEY } = require('../config/config')

router.post('/weather', async (req, res) => {
    try {
        const cityName = (req.body.city);
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`)
            .then(weatherData=> {
                let data = weatherData.data;
                res.status(200).send(data)
            })
            .catch(err => {
                console.log(err);
                res.status(404).send('City not found!');
            })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;