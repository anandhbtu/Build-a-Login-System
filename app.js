"use strict";

const express = require("express");
require("express-async-errors");
const app = express();
const expressEjsLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//database connection
require("./mongo");

//Models

require("./models/admin");
require("./models/student");
require("./models/teacher");

require("./models/registration");

//MidleWare

app.use(bodyParser.json()).use(morgan());

app.use("/dashboard", require("./routes/admin"));
app.use("/dashboard", require("./routes/students"));
app.use("/dashboard", require("./routes/teachers"));
app.use("/dashboard", require("./routes/registration"));
app.use("/dashboard", require("./routes/login"));
app.use("/", require("./routes/test"));

//Not Found Route
app.set("view engine", "ejs");
app.use(expressEjsLayout);

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("Routes not found");
  next(error);
});

if (app.get("env") === "production") {
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
    });
  });
}

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack,
  });
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () =>
  console.log(`..........................server connect on port ${PORT}`)
);
