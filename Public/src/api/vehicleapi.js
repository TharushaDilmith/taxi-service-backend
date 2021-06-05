const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehiclecontroller");

module.exports = function () {
  router.post("/add", controller.addVehicle);
  router.get("/", controller.getVehicles);
  router.get("/calculate/:id&:duration", controller.calculateTripCharges);
  router.delete("/remove/:id",controller.removeVehicle);
  router.get('/:id',controller.getVehicleByID);
  router.put('/update/:id',controller.updateVehicle);
  return router;
};
