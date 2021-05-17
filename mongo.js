const mongoose = require("mongoose");
require("dotenv").config();
var mongodbErrorHandler = require("mongoose-mongodb-errors");

mongoose.Promise = global.Promise;
mongoose.plugin(mongodbErrorHandler);
mongoose.connect(process.env.MONGO_URI);
 