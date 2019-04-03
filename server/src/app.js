const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { port } = require('./config/config');
const weatherRoutes = require('./weatherRoutes/weatherRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(weatherRoutes);

// Handle Production
if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/client/public'));

    //Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/client/public/index.html');
    });
};

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
