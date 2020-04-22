require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/users");
const path = require("path"); 
const isProduction = process.env.NODE_ENV === "production";

mongoose.set('useCreateIndex', true);
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB succesfully connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use("/users", users);


if (isProduction) { 
    //set static folder
    app.use(express.static(path.join(__dirname, "frontend/build")));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}
 
app.listen(PORT, () => { 
    console.log(`App running on port ${PORT}`)
}) 