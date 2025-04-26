const express= require('express');
const calculationRoute = require("./routes/calculatorRoutes")
const app= express();

app.use('/calculator',calculationRoute)

module.exports= app;