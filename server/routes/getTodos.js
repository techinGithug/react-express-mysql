const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", async(req, res) => {
    mysqlConnection.query("SELECT * FROM mydb.todos", (err, row, field) => {
        if(!err) {
            res.send(row)
        } else {
            console.error(err.message)
        }
    })
});

module.exports = Router;