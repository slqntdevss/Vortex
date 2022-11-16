function startTime() {
	var today = new Date()
	var h = today.getHours
	var m = today.getMonth
	var yyyy = today.getFullYear
	let period = "AM"

	if (h >= 12) {
		period = "PM"
	}

	h = h > 12 ? h % 12 : h;

	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	document.getElementById('.clock').innerHTML = h + ":" + m + " " + period + ", " + yyyy
}
var updateClock = setInterval(clock, 1000)