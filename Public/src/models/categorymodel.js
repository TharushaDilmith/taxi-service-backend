const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  vehicles: [
    { type: mongoose.Schema.Types.ObjectId, ref: "vehicles", required: false },
  ],
});

const category = mongoose.model("categories", categorySchema);
module.exports = category;
