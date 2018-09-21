let mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nom: String
});

module.exports = Contact = mongoose.model('contact', ContactSchema);