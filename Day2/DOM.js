var listH1 = document.getElementsByTagName("h1");
function generateNumber() {
	return Math.round(Math.random() * 255);
}
function generateColor() {
	return `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;
}
for (let i = 0; i < listH1.length; i++) {
	listH1[i].style.color = generateColor();
}

var listTitles = document.getElementsByClassName("title");

for (let i = 0; i < listTitles.length; i++) {
	listTitles[i].style.fontSize = "3rem";
}

var special = document.getElementById("special");

special.style.textAlign = "center";

var listTitlesQ = document.querySelectorAll(".title");
var title = document.querySelector(".title");
console.log(listTitlesQ, title);
