const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehiclecontroller");

module.exports = function () {
  router.post("/add", controller.addVehicle);
  router.get("/", controller.getVehicles);
  router.get("/calculate/:id&:duration", controller.calculateTripCharges);
  return router;
};
