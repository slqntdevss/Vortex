document.body.classList.add("classic")
function midnight() {
	window.localStorage.setItem('midnight', 'on');
	document.body.style.backgroundColor = "#26324b"
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
function lava() {
	window.localStorage.setItem('lava', 'on')
	document.body.style.backgroundColor = "#fb4509"
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
}
function classic() {
	window.localStorage.setItem('classic', 'on')
	document.body.style.backgroundColor = "#0E48A7"
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
if (window.localStorage.getItem('classic') == "on") {
	document.body.classList.add("classic")
}

else if (window.localStorage.getItem('midnight') == "on") {
	document.body.classList.add("midnight")
}

else if (window.localStorage.getItem('lava') == "on") {
	document.body.classList.add("lava")
}