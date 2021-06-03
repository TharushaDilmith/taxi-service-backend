const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  code: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  chargesPerDay: { type: Number, required: true },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: false,
    },
  ],
});

const vehicle = mongoose.model("vehicles", vehicleSchema);

module.exports = vehicle;
