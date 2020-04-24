const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../config/passport");

router.post("/signup", (req, res, next) => {
    passport.authenticate("signup", {session: false}, (err, user, info) => {
        if(err) {return next(err)}
        if(!user) {return res.json(info.messageInfo)}
        res.json(info.messageInfo);
    })(req, res, next); 
})
router.get("/confirmation", (req, res, next) => {
    passport.authenticate("confirmation", {session: false}, (err, user, info) => {
        if(err) {return next(err)}
        if(!user) {return res.json(info.messageInfo)}
        res.json(info.messageInfo);
    })(req, res, next);
})

router.post("/login", (req, res, next) => {
    passport.authenticate("login", {session: false}, (err, user, info) => {
        if(err) {return next(err)}
        if(!user) {return res.json({isAuth: false, info})}
        const token = jwt.sign(user.id, process.env.SecretOrKey);
        user.password = undefined;
        user.isVerified = undefined;
        user._id = undefined;
        res.status(200).json({isAuth: true, user, token});
    })(req, res, next);
})
router.post("/login/provider/auth", (req, res, next) => {
    passport.authenticate("providerlogin", (err, user, info) => {
        if(err) {return next(err)}
        if(!user) {return res.json({isAuth: false, info})}
        const token = jwt.sign(user.id, process.env.SecretOrKey);
        user.password = undefined;
        user.isVerified = undefined;
        user._id = undefined;
        res.status(200).json({isAuth: true, user, token});
    })(req, res, next);
})

module.exports = router; 

