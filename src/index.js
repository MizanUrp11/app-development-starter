/**
 * /login{email,password}
 * /signup{name,email,password}
 * /add_url{url} => {shortened}
 * /my_urls {data:[]}
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const signup = require("./controllers/signup");
const login = require("./controllers/login");
const auth = require("./middlewares/auth");
const error_handler = require("./middlewares/error_handler");
const redirects = require("./controllers/redirects");
const cors = require("./middlewares/cors");

//Middlewares
app.use(cors);
app.use(bodyParser.json());
app.use('/api',auth);

//Routes
app.use(login);
app.use(signup);
app.use(redirects);

app.use(error_handler);

const _port = process.env.PORT || 4000;
app.listen(_port, e => console.log(`Server Started at port ${_port}`));