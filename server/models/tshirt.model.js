const { model, Schema } = require("mongoose");

const tshirtSchema = new Schema({
  name: String,
  price: Number,
  picture: String,
  brand: String,
  color: String,
});

const tshirtModel = model("Tshirt", tshirtSchema);

module.exports = tshirtModel;
