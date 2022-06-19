const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../html/food.html"));
});
router.get("/:recipes", function (req, res) {
	res.sendFile(path.join(__dirname, "../html/recipes.html"));
});

module.exports = router;
