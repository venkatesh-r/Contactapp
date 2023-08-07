const express = require('express');
const router = express.Router();
//const { getContact } = require('../controller/contactController');
const { getContact, loginUser, currentUser } = require('../controller/userController');



router.post("/register", getContact);

router.post("/login", loginUser);

router.post("/current", currentUser);

module.exports = router;