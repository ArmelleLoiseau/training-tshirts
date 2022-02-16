const express = require("express");
const router = express.Router();
const tshirtModel = require("./../models/tshirt.model");

router.get("/", async (req, res, next) => {
  try {
    const tshirts = await tshirtModel.find();
    res.json(tshirts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
