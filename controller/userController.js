const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require('../models/userModels');

//@desc Register all user
//@route POST api/user/register
//public
const getContact = asyncHandler(async (req, res) =>{
    console.log(req.body);
    const {username, email, password} = req.body;
    console.log('getContact triggered')
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are empty")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error('User already registered')
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
        {
            username,
            email,
            password: hashedPassword,
    });
    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
         res.status(401);
         throw new Error("User data us not valid");
    }
    res.json({message: "User Created"})
    
});

//@desc Login user
//@route POST api/user/login
//public
const loginUser = asyncHandler(async (req, res) =>{
    res.json({message: "Login user"})
});

//@desc Register all user
//@route POST api/user/current
//public
const currentUser = asyncHandler(async (req, res) =>{
    res.json({message: "Current user"})
});

module.exports = {getContact, loginUser, currentUser}