const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();
const SportsRouter = require("./router/sports");
const FoodRouter = require("./router/food.js");
server.set("view engine", "ejs");
server.get("/", function (req, res, next) {
	res.render("index");
});
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/sports", SportsRouter);
server.use("/food", FoodRouter);

mongoose
	.connect(
		"mongodb+srv://Admin:eEmzmNf2c1WMy6gx@microclub.g2fyh.mongodb.net/Health"
	)
	.then(function () {
		console.log("DB is connected");
		server.listen(3000, function () {
			console.log("Server is on");
		});
	});
