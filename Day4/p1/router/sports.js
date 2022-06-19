const express = require("express");
const path = require("path");
const Sport = require("../models/sport");

const router = express.Router();

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../html/sports.html"));
});
router.post("/", function (req, res) {
	// create sport
	console.log(req.body);
	Sport.create({
		title: req.body.title,
		players: req.body.players,
		description: req.body.description,
		team: Boolean(req.body.team),
	});
	res.send("Sport created");
});

router.get("/create", function (req, res) {
	res.sendFile(path.join(__dirname, "../html/createSport.html"));
});
router.get("/:sport", function (req, res) {
	res.sendFile(path.join(__dirname, "../html/matches.html"));
});
router.get("/:sport/:match", function (req, res) {
	res.send(req.params.sport + " " + req.params.match);
});
module.exports = router;
