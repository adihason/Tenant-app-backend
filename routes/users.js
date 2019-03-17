const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const Users = require('../database/models/usersModel');

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json("error");
        }
        else {
            const user = new Users({
                userName: req.body.userName,
                password: hash
            });
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json("success");
                })
                .catch(error => {
                    res.status(500).json("error");
                });
        }
    });
});

router.post('/signin', (req, res) => {
    //checked if the user’s user name exists or not. If not then return 401 unauthorized access
    Users.findOne({ userName: req.body.userName })
        .exec()
        // If user name is there then check the password with bcrypted database password if match found then welcome to the JWT auth else 401 unauthorized access.
        .then(user => {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json('Unauthorized Access');
                }
                if (result) {
                    console.log(`${user.userName}, signed in at ${moment(Date.now())}`)
                    const JWTToken = jwt.sign({
                        userName: user.userName,
                        _id: user._id
                    },
                        'secret',
                        {
                            expiresIn: '2h'
                        });
                    return res.status(200).json({
                        success: 'Welcome to the JWT Auth',
                        token: JWTToken,
                        name: user.userName,
                        status: 200
                    });
                }
                return res.status(401).json('Unauthorized Access');
            });
        })
        .catch(error => {
            res.status(500).json('error');
        });
});

router.get('/signout', (req, res) => {
    console.log(`user signed out at ${moment(Date.now())}`);
    return res.status(200).json({
        message: 'success',
    });
});


module.exports = router;