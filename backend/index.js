const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const app = express();
const authRoute = require("./routes/auth")
const cors = require("cors");
const passportSetup = require("./passport");


app.use(cookieSession(
    {
        name: 'session',
        keys: ['lama'],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth", authRoute);

app.listen("5000",()=>{
    console.log("Server is running on port http://localhost:5000");
})