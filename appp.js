const express = require("express");
const app = express();
const async = require('async');
const request = require('request');
const bodyParser = require("body-parser");
const morgan = require("morgan");
app.use(bodyParser.json()).use(morgan());
function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://www.alphavantage.co/query?function=SMA&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=demo",
  "https://www.alphavantage.co/query?function=VWAP&symbol=IBM&interval=15min&apikey=demo",
  "https://www.alphavantage.co/query?function=T3&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=demo",
  "https://www.alphavantage.co/query?function=MACD&symbol=IBM&interval=daily&series_type=open&apikey=demo",
  "https://www.alphavantage.co/query?function=MACD&symbol=USDEUR&interval=weekly&series_type=open&apikey=demo",
  "https://www.alphavantage.co/query?function=MACDEXT&symbol=IBM&interval=daily&series_type=open&apikey=demo"
];

async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);

  console.log(JSON.stringify(res));
});