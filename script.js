function screen() {
	width = window.innerWidth;
	document.getElementById("width").innerHTML = width +" px";
}
	window.onresize = screen;
	window.onload = screen;