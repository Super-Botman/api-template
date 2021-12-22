const express = require('express')
const indexRoutes = require('./Routes/indexRoutes')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});

app.use('/', indexRoutes)

app.listen(process.env.APP_PORT, () => {
    console.log("API listening on port " + process.env.APP_PORT)
})