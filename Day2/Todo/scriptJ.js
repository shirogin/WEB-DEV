var add = $("#header button"),
	input = $("input"),
	todoList = $("ul");

add.click(function () {
	input.toggleClass("hide");
});
input.keypress(function (e) {
	if (e.key === "Enter") {
		addElement(input.val());
	}
});
function addElement(text) {
	var li = $('<li class="element"></li>');

	var span = $('<span><i class="fa fa-trash"></i></span>');

	span.click(function () {
		li.remove();
	});

	var p = $(`<p>${text}</p>`);
	p.click(function () {
		p.toggleClass("done");
	});

	li.append(span);
	li.append(p);
	todoList.append(li);
}
addElement("Buy a pc");
addElement("Install the pc");
