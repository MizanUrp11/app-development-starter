/**
 * Database connection
 * Model Definition
 */
const { Sequelize, DataTypes, Model } = require('sequelize');
const CONNECTION_STRING = process.env.DATABASE || "postgres://postgres:12345678@localhost:5432/lwhh"
const database = new Sequelize(CONNECTION_STRING);
database.authenticate()
    .then(e => { console.log("Database connection successful"); })
    .catch(e => { console.log("Connection Failed"); })

//schema definition
const User = database.define('users', {
    name: Sequelize.String,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
})
const Direction = database.define('directions', {
    destination: Sequelize.String,
    hash: Sequelize.STRING,
})
//for migration purpose
// database.sync()
//     .then(e => {
//         console.log("Database synced");
//     })
//     .catch(e => {
//         console.error("Database sync Failed");
//     })

module.exports = { database, User, Destination }