var express = require('express');
var router = express.Router();
import Models from '../models';
import uuid from 'uuid/v4';
import Sequelize from 'sequelize';
import passport from 'passport';

// Sign in
router.post('/signin',
    passport.authenticate('local', { failureRedirect: '/sign_in' }),
    async (req, res) => {
        res.redirect('/home')
    }
);

// Sign up
router.post('/signup',
    async (req, res) => {
        const User = Models.User.build({
            email: req.body.email
        })
        User.password = await User.setPassword(req.body.password)
        User.save()
        req.login(User, () => {
            res.redirect('/home');
        })
    }
);

module.exports = router;
