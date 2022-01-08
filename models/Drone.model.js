const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const droneModel = model("Drone", droneSchema);
module.exports = droneModel;
