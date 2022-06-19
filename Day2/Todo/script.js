var add = document.querySelector("#header button"),
	input = document.getElementsByTagName("input")[0],
	todoList = document.getElementsByTagName("ul")[0];

add.addEventListener("click", function () {
	input.classList.toggle("hide");
});
input.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addElement(input.value);
	}
});
function addElement(text) {
	var li = document.createElement("li");
	li.classList.add("element");

	var span = document.createElement("span");
	span.innerHTML = '<i class="fa fa-trash"></i>';

	span.addEventListener("click", function () {
		li.remove();
	});

	var p = document.createElement("p");
	p.addEventListener("click", function () {
		p.classList.toggle("done");
	});
	p.append(text);

	li.append(span);
	li.append(p);
	todoList.append(li);
}
addElement("Buy a pc");
addElement("Install the pc");
