// initial config
require("dotenv").config();
require("./config/mongoDB.config");

// dependencies injection
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// app.use(logger("dev"));

app.use(express.json());

// this rule allows the client app to exchange via http via the server (AJAX ... Axios)
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200,
};

// cors middle on
app.use(cors(corsOptions));

// routers

const tshirtsRouter = require("./routes/tshirts");
app.use("/tshirts", tshirtsRouter);

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
