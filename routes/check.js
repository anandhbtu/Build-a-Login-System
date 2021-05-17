const async = require('async');
const request = require('request');

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
  "http://localhost:3010/alm/build_tool",
  "http://localhost:3010/alm/development_tool",
  "http://localhost:3010/alm/project_architecture"
];

async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);
  console.log(res);
});