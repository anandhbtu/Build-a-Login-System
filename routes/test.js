const express = require("express");
const router = require("express").Router();
var fetchUrl = require("fetch").fetchUrl;

const option = {};

router.get("/test", async (req, res) => {
  const data = await fetchUrl(
    "https://www.alphavantage.co/query?function=SMA&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=demo",
    function (error, meta, body) {
      console.log(body.toString());

      res.json(data);
    }
  );
});

module.exports = router;
