const Painting = require("../model/painting.model");

exports.getAllPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.status(200).json({ paintings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPainting = async (req, res) => {
  try {
    console.log("i am going to add file", req.body, req.file, req.files);
    const painting = new Painting({ ...req.body, image: req.file.filename });
    await painting.save();
    res.status(200).json({ message: "Painting added", painting });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePainting = async (req, res) => {
  try {
    const painting = await Painting.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Painting updated", painting });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePainting = async (req, res) => {
  try {
    const painting = await Painting.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Painting deleted", painting });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
