menu.onClick = function myFunction() {
	console.log("test");
	var x = document.getElementById('myBurgerNav');

	if (x.className === "burgerNav") {
		x.className += " responsive";
	} else {
		x.className = "burgerNav";
	}
}