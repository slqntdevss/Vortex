document.body.classList.add("classic")
function midnight() {
	window.localStorage.setItem('midnight', 'true');
	document.body.style.backgroundColor = "#26324b"
	localStorage.setItem('classic', 'false');
	window.localStorage.removeItem('classic');
}
//function midnight() {
//window.localStorage.setItem('midnight', 'on')

//window.localStorage.setItem('classic', 'off')
//window.localStorage.removeItem('classic')
//}
function classic() {
	window.localStorage.setItem('classic', 'on')
	document.body.style.backgroundColor = "#0E48A7"
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
}
if (window.localStorage.getItem('classic') == "on") {
	document.body.classList.add("classic")
} else if (window.localStorage.getItem('midnight') == "true") {
	document.body.classList.add("midnight")
}