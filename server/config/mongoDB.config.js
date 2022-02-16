const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then((dbConnectionResult) =>
    console.log(
      `Connected to Mongo! Database name: "${dbConnectionResult.connection.name}"`
    )
  )
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
