const express = require('express');
const router = express.Router();
const Contact = require('./../models/Contact');

router.get('/', (req, res) => {
    Contact.find()
            .then(users => res.json(users));
});

router.post('/', (req, res) => {
    const newContact = new Contact({
        nom: req.body.nom
    });

    newContact.save()
    .then(contact => res.json(contact));
});

module.exports = router;