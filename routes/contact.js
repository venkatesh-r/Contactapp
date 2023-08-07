const express = require('express');

const router = express.Router();

const {getContact, createContact, getContacts, updateContacts, deleteContact} = require('../controller/contactController');

router.route('/').get(getContact).post(createContact);
router.route('/:id').get(getContacts).put(updateContacts).delete(deleteContact);

module.exports = router;