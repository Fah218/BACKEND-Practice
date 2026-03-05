const express = require('express')
const router = express.Router();

const User = require('../models/userModel');

// routes

//CRUD operation

//View/Read

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})


//Create

router.post('/users', async (req, res) => {
    console.log("Recieved request for POST method")
    try {
        const { name, age, weight } = req.body;
        const newUser = new User({ name, age, weight });
        await newUser.save();
        res.status(200).json({
            success: true,
            user: newUser
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

//Update

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, weight } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, { name, age, weight }, { new: true });

        if (!updateUser) {
            res.json({
                message: "User Not found"
            })
        }
        // but if u have update the user successfully
        res.status(200).json({
            success: true,
            user: updateUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

//Delete

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            res.json({
                message: "User Not found"
            })
        }
        // if user found and deleted the user successfully
        res.status(200).json({
            success: true,
            user: deleteUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;