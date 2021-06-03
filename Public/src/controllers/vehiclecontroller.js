const Vehicle = require("../models/vehiclemodel");

const addVehicle = async (req, res) => {
  if (req.body) {
    const vehicle = new Vehicle(req.body);
    await vehicle
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getVehicles = async (req, res) => {
  await Vehicle.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};
const calculateTripCharges = async (req, res) => {
  if (req.params && req.params.id) {
    const vehicle = await Vehicle.findById(req.params.id);

    let charge = 0;
    charge = req.params.duration * vehicle.chargesPerDay;

    res.status(200).send({ charge: charge });
  }
};

module.exports = {
  addVehicle,
  getVehicles,
  calculateTripCharges,
};
