var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const hostname="localhost";
const port=3001;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var chansonsRouter = require("./routes/chansons");

var channelinfoRouter = require("./routes/channelinfo");  //new

const mongoose = require("mongoose")
require("dotenv/config");
const bodyparser=require("body-parser");
const cors=require("cors");

/* app.get('/test', (req,res)=> {
    res.json({
        req: req.method,
        data: "This is a GET"
    })
}); */

/* app.put('/test', (req,res)=> {
    res.json({
        req: req.method,
        data: "This is a PUT"
    })
}); */


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/chanson",chansonsRouter);
app.use("/channelinfo",channelinfoRouter);      //new


app.use(bodyparser.json());
/* app.use(cors()) */

try{
    mongoose.connect(process.env.DB_CONNECTION,
        {useNewUrlParser: true},
        () => console.log("Connected to database!")
)}catch(err){
    res.json({message:err});
}
;

app.listen(port,hostname),() =>{
    console.log(`mon serveur fonctionne sur http://${hostname}:${port}\n`);
}



module.exports = app;
/* app.listen(3001) */