var me = {
	firstName: "Youcef",
	lastName: "Madadi",
	age: 24,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

for (const k in me) {
	console.log(k);
}
