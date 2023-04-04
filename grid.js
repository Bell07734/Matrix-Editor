window.addEventListener("load", function (e) {
	let grid = document.getElementById("grid");
	for (let row of grid.children) {
		for (let cell of row.children) {
			cell.addEventListener("click", pressed);
		}
	}
});

function pressed(event) {
	let cell = event.target;
	if (cell.classList.contains("pressed")) {
		cell.classList.remove("pressed");
	} else {
		cell.classList.add("pressed");
	}

	let grid = document.getElementById("grid");
	let matrix = [];

	let code = document.getElementById("code");
	let text = "[";

	for (let row of grid.children) {
		text += "[";
		let matrixRow = [];
		for (let cell of row.children) {
			if (cell.classList.contains("pressed")) {
				text += "100";
				matrixRow.push(100);
			} else {
				text += "0";
				matrixRow.push(0);
			}
			text += ", ";
		}
		text += "],</br>";
		matrix.push(matrixRow);
	}
	text += "]";
	code.innerHTML = text;
}
