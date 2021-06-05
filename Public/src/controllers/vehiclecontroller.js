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
const removeVehicle = async (req, res) => {
  if (req.params.id) {
    await Vehicle.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
};
const updateVehicle = async (req, res) => {
  if (req.params.id && req.body) {
    await Vehicle.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      code: req.body.code,
      model: req.body.model,
      type: req.body.type,
      chargesPerDay: req.body.chargesPerDay,
    })
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send({ err: err.message });
      });
  }
};

const getVehicleByID = async (req, res) => {
  if (req.params.id) {
    await Vehicle.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  addVehicle,
  getVehicles,
  calculateTripCharges,
  removeVehicle,
  updateVehicle,
  getVehicleByID,
};
