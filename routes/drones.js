const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();

const droneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  droneModel
    .find()
    .then((droneRes) => {
      res.render("drones/list.hbs", {
        drones: droneRes,
      });
    })
    .catch();
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    await droneModel.create(req.body);
    res.redirect("/drones");
  } catch (error) {}
});

router.get("/drones/:id/edit", (req, res, next) => {
  droneModel
    .findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form.hbs", {
        droneToUpdate: drone,
      });
    })
    .catch(next);
});

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    await droneModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (error) {
    next(err);
  }
});

router.get("/drones/:id/delete", async (req, res, next) => {
  const id = req.params.id;
  try {
    await droneModel.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
