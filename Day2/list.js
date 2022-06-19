var list = [];
list[0] = 10;
list[4] = 20;
console.log(list);

var Notes = [12, 14, 8, 16, 4, 9, 13, 12, "Absent"];

for (var i = 0; i < Notes.length; i++) {
	console.log("Student " + i, Notes[i]);
}

// Declaring a function
function Max(a, b) {
	if (a > b) return a;
	else return b;
}

// Declaring a function in a variable
var a = prompt("enter a"),
	b = prompt("enter b");
console.log(Max(a, b));
