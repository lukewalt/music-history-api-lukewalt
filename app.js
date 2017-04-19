'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const routes = ('./routes/');
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Setup your routes middleware
app.use('/musichistory/api/', routes);


// catch any undefined routes with a 404 middleware
app.use((req, res, next) => {
  // instantiate a new error and assign it
  let err = new Error('404 Page Note Found');
  // set status on our defined error
  err.status = 404;
  // call next to proceed down the chain with our error
  next(err)
})

app.use((err, req, res, next) => {
  console.log('ERROR :', err);
  res.json({
    message: err.message,
    error: {}
  })
})

// assign port to variable or listen on 3000 if there is not one established on envirnoment obj
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app is listening to your code on PORT: ${port}`);
})
