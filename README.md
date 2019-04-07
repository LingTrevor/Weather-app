# Weather-app
Weather app

Project uses the https://openweathermap.org API.

This is the first project where I used Vue.js and SASS.

The back-end is built with Node.js (Express.js framework) and front-end is with Vue.js. 



>## Client Setup
---
   **Main folder:**
    
    First: cd client

    Second: npm install
---
**Compiles and hot-reloads for client development**

    npm run serve
---
**Compiles and minifies for production**

It builds production files to **server/src/client/public** folder

    npm run build
---
**Lints and fixes files**

    npm run lint    
---
> ## Server Setup
---
   **Main folder:**
    
    npm install
---
**Compiles and hot-reloads for server development (uses nodemon)**

    npm run dev
---
**Run server in production mode**

    npm run start
---
**Add your https://openweathermap.org API_KEY**

    API_KEY: 
        server/src/config/config.js


---
**Routes**

    localhost:5000

    POST: /weather
        
        Empty POST request will return error message: 
        {"error": "Please add a city to search!"}

        If the location is not found it will return: 
        {"error": “(Searched Location Name) not found!"}

---