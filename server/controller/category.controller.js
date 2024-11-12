const Category = require("../model/category.model");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({
      isActive: true,
    }).limit(3);
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCategory = async (req, res) => {
  try {
    console.log("i am going to add file", req.body, req.file, req.files);
    const category = new Category({ ...req.body, image: req.file.filename });
    await category.save();
    res.status(200).json({ message: "Category added", Category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    console.log("i am going delete", req.params.id);
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category Deleted", Category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
