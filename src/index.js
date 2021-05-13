/**
 * /login{email,password}
 * /signup{name,email,password}
 * /add_url{url} => {shortened}
 * /my_urls {data:[]}
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.end("Hello world2");
})

const _port = process.env.PORT || 4000;
app.listen(_port,e=>console.log(`Server Started at port ${_port}`));