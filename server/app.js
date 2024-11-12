require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const connectDB = require("./db/db");
const { login, run } = require("./controller/user.controller");
const checkAuth = require("./auth/auth");
const {
  addPainting,
  getAllPaintings,
  updatePainting,
  deletePainting,
} = require("./controller/painting.controller");
const {
  createContact,
  getAllContacts,
} = require("./controller/contact.controller");
const upload = require("./middleware/upload");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Piy's painting shop API" });
});

//make public to static
// app.use(express.static("public"));
const path = require("path");
const {
  addCategory,
  getAllCategories,
  deleteCategory,
} = require("./controller/category.controller");
app.use("/static", express.static(path.join(__dirname, "public")));

//routes
app.post("/api/login", login);

app.post("/api/paintings", checkAuth, upload.single("image"), addPainting);
app.get("/api/paintings", getAllPaintings);
app.put("/api/paintings/:id", checkAuth, updatePainting);
app.delete("/api/paintings/:id", checkAuth, deletePainting);

//category
app.post("/api/category", checkAuth, upload.single("image"), addCategory);
app.get("/api/category", getAllCategories);
app.delete("/api/category/:id", checkAuth, deleteCategory);

app.post("/api/contact", createContact);
app.get("/api/contact", checkAuth, getAllContacts);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// run();
