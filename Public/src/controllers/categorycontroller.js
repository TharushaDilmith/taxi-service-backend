const Category = require("../models/categorymodel");

//add category to database
const addCategory = async (req, res) => {
  if (req.body) {
    const category = new Category(req.body);
    await category
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};
const getCategories = async (req, res) => {
  await Category.find({})
    .populate("vehicles", "code model type name chargesPerDay")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getVehiclesInCategory = async (req, res) => {
  if (req.params && req.params.id) {
    await Category.findById(req.params.id)
      .populate("vehicles", "code model type name chargesPerDay")
      .then((data) => {
        res.status(200).send({ vehicles: data.vehicles });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};



module.exports = {
  addCategory,
  getCategories,
  getVehiclesInCategory,
};
