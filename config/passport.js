const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const CustomStrategy = require('passport-custom').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const TokenVerification = require("../models/TokenVerification");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-handlebars');
const path = require("path");
const baseUrl = process.env.PROD_URL || "http://localhost:3000";

passport.use("signup", new localStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    UserModel.findOne({email}, (err, user) => {
    if(err) {return done(err)}
        if(user) {
            return done(null, false, {
                messageInfo: {
                    message: `User already exist with : ${email}`, 
                    isRegister: false
                }
            })
        } else { 
            bcrypt.hash(password, 10).then((hash) => {
                const name = req.body.name;
                UserModel.create({name, email, password: hash}).then(user => {
                    const token = jwt.sign({userId: user.id}, process.env.SecretOrKey)
                            
                            //Transporter configuartion
                            let transporter = nodemailer.createTransport({
                                service: "hotmail",
                                port: 587,
                                secure: false,
                                tls: { ciphers:'SSLv3' },
                                auth: { 
                                    user: process.env.EMAIL, 
                                    pass: process.env.EMAIL_PASS 
                                }
                            });

                            // Engine configuration
                            transporter.use('compile', hbs({
                                viewEngine: {
                                    extName: ".handlebars",
                                    defaultLayout: false,
                                },
                                viewPath: path.resolve(__dirname, "../views/"),
                                extName: ".handlebars"
                            }));
                            // Send email    
                            transporter.sendMail({
                                from: '"Cookit" <s-attilah@hotmail.com>',
                                to: user.email, 
                                subject: "Cookit activer votre compte",
                                template: 'mail_template',
                                context: {
                                    name: user.name,
                                    url: `${baseUrl}/users/confirmation/${token}`
                                }
                            })
                            // return 
                            if(err) {return err}
                            return done(null, user, {
                                messageInfo: {
                                    message: `A confirmation email has been sent to : ${email}`, 
                                    isRegister: true
                                }
                            });
                })
            });
        }
    })
}))

const opts = { 
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter("token"),
    secretOrKey: process.env.SecretOrKey,
    passReqToCallback: true
}

passport.use("confirmation", new JwtStrategy(opts, (req, payload, done) => {
    UserModel.findOne({_id: payload.userId}, (err, user) => {
        if(err) {return done(err, false)}
        if(user.isVerified) {
            return done(null, false, {
                messageInfo: {
                    message: `${user.email} has already been verified, please try to login.`,
                    isConfirm: false
                }
            })
        } else {
            user.isVerified = true;
            user.save();
            return done(null, user, {
                messageInfo: {
                    message: `Welcome to Cookit ${user.name} The account has been verified. Please log in.`, 
                    isConfirm: true
                }
            })
        }
    })
}))

passport.use("login", new localStrategy({ 
    usernameField: "email",
    passwordField: "password",
    session: false
    }, (email, password, done) => {
        UserModel.findOne({email}, (err, user) => {
            if (err) {return done(err)}
            if (!user.isVerified) {return done(null, false, {message: "You have to confirm your email address before continuing."})}
            if(!user) {return done(null, false, {message: "The username and password you have entered do not match those in our files. Please check and try again."})}
            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {return done(null, false, {message: "The username and password you have entered do not match those in our files. Please check and try again."})} 
                return done(null, user);
            })
        })
    }
))

passport.use('providerlogin', new CustomStrategy((req, done) => {
    const {email} = req.body;
        UserModel.findOne({email}, (err, user) => {
            if (err) {return done(err)}
            if (!user.isVerified) {return done(null, false, {message: "You have to confirm your email address before continuing."})}
            if(!user) {return done(null, false, {message: "No user corresponds to the associated provider account."})}
            return done(null, user);
        })
    }
  ));




