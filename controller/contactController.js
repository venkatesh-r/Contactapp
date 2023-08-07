const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels")

//@Get all contacts
//@route GET api/contacts
//public
const getContact = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@Get create New contact
//@route Post api/contacts
//public
const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body );
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are manadatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    }) 
    res.status(201).json(contact);
});

//@Get create Update Contacts
//@route GET api/contacts/:id
//public
const updateContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedContact);
});

//@Get create new contacts
//@route GET api/contacts/:id
//public
const getContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@Get Delete contacts
//@route GET api/contacts/:id
//public
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    console.log('Delete::' + contact)
    await contact.deleteOne();
    res.status(200).json(contact);
});


module.exports = {getContact, createContact, getContacts, updateContacts, deleteContact}