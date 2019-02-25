const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/WeatherController')

router.post('/weather', WeatherController.getWeather)

module.exports = router;