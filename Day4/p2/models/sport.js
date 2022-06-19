const mongoose = require("mongoose");

const SportSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		players: { type: Number, required: true },
		description: { type: String, required: true },
		team: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const Sports = mongoose.model("Sports", SportSchema);
module.exports = Sports;
