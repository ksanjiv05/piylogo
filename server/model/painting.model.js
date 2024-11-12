const mongoose = require("mongoose");

const paintingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    tag: {
      type: String,
    },
    dimension: {
      type: String,
      // required: true,
    },
    author: {
      type: String,
      // required: true,
    },
    artist: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Painting", paintingSchema);
