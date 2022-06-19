const express = require("express");
const path = require("path");
const Sport = require("../models/sport");

const router = express.Router();

router
	.route("/")
	.get(function (req, res) {
		// get data from db
		Sport.find().then(function (data) {
			res.render("sports/index", {
				sports: data,
			});
		});
	})
	.post(function (req, res) {
		// create sport
		console.log(req.body);
		Sport.create({
			title: req.body.title,
			players: req.body.players,
			description: req.body.description,
			team: Boolean(req.body.team),
		}).then(function () {
			res.send("Sport created");
		});
	});

router.get("/create", function (req, res) {
	res.render("sports/create");
});
router.get("/:sport", function (req, res) {
	Sport.findById(req.params.sport).then(function (data) {
		res.render("sports/detail", { sport: data });
	});
});
router
	.route("/:sport/edit")
	.get(function (req, res) {
		Sport.findById(req.params.sport).then(function (data) {
			res.render("sports/edit", { sport: data });
		});
	})
	.post(function (req, res) {
		Sport.findByIdAndUpdate(
			req.params.sport,
			{
				title: req.body.title,
				players: req.body.players,
				description: req.body.description,
				team: Boolean(req.body.team),
			},
			{ returnDocument: "after" }
		).then(function (data) {
			res.render("sports/edit", { sport: data });
		});
	});
router.post("/:sport/delete", function (req, res) {
	Sport.findByIdAndDelete(req.params.sport).then(function (data) {
		res.redirect("/sports");
	});
});
module.exports = router;
