const Contact = require("../model/contact.model");

exports.createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      message = "",
      phone = "",
      purpose,
      address = "",
      painting = null,
    } = req.body;
    if (!name || !email || !message || !purpose) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const contact = new Contact({
      name,
      email,
      message,
      phone,
      purpose,
      address,
      painting,
    });
    await contact.save();
    console.log("message is saved", contact);
    return res.status(200).json({ message: "Contact added", contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
