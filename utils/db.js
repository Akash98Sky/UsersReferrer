const mongoose = require("mongoose");
const logger = require('./logger');

mongoose.Promise = global.Promise;

const options = {
  dbName: "booksapp",
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

if (!process.env.MONGODB_URI) {
  logger.error("Please set MONGO_URI");
  process.exit(-1);
}

mongoose.connection.on("connected", () => {
  logger.info("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  logger.error("MongoDB connection error:", err);
  process.exit(-1);
});

mongoose.connection.on("disconnected", () => {
  logger.error("MongoDB disconnected");
});

const connectDB = () => mongoose.connect(`${process.env.MONGODB_URI}`);

module.exports = { connectDB };