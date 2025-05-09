const mongoose = require('mongoose');

const vendeurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  number: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Vendeur', vendeurSchema);
