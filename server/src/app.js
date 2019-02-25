const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { port } = require('./config/config');
const weatherRoutes = require('./weatherRoutes/weatherRoutes')

const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(weatherRoutes);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
