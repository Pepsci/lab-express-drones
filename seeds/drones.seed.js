require("../db/index");

const DroneModel = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

(async function () {
  try {
    await DroneModel.deleteMany();
    const res = await DroneModel.create(drones);
    console.log(`Succes : ${res.length} Drones deleted from database`);
  } catch (error) {
    console.log("ERROR");
    console.error(error);
  }
})();
