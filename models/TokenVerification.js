const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenVerification = new mongoose.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 12000 }
})

const Token = mongoose.model("Token", tokenVerification);

module.exports = Token;