const express = require('express');
require('./conn');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Home page");
});

app.use("/user",userRoute);

app.listen(7000,()=>{
    console.log("Server is running on port 7000");
})
