const mongoose = require("mongoose");

const paintingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    purpose: {
      type: String,
      required: true,
    },
    painting: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Painting",
    },
    message: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", paintingSchema);
