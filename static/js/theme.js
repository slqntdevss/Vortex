//handles particles and theme
//
//███╗░░░███╗██╗░░░██╗░██████╗████████╗██╗░█████╗░
//████╗░████║╚██╗░██╔╝██╔════╝╚══██╔══╝██║██╔══██╗
//██╔████╔██║░╚████╔╝░╚█████╗░░░░██║░░░██║██║░░╚═╝
//██║╚██╔╝██║░░╚██╔╝░░░╚═══██╗░░░██║░░░██║██║░░██╗
//██║░╚═╝░██║░░░██║░░░██████╔╝░░░██║░░░██║╚█████╔╝
//╚═╝░░░░░╚═╝░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░
//
document.body.classList.add("classic")
function midnight() {
	window.localStorage.setItem('midnight', 'on');
	document.body.style.backgroundColor = "#26324b"
	document.body.style.color = "#ffffff"
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
function lava() {
	window.localStorage.setItem('lava', 'on')
	document.body.style.backgroundColor = "#fb4509"
	document.body.style.color = "#000000"
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
}
function classic() {
	window.localStorage.setItem('classic', 'on')
	document.body.style.backgroundColor = "#0E48A7"
	document.body.style.color = "#000000"
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
function retro() {
	window.localStorage.setItem('retro', 'on')
	document.body.style.backgroundColor = "#000000"
	document.body.style.color = "#14c832"
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
	window.localStorage.setItem('classic', 'off')
	window.localStorage.removeItem('classic')
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
else if (window.localStorage.getItem('retro') == "on") {
	document.body.classList.add("retro") 
}

	function loadStars() {
		particlesJS("particles-js", {
			"particles": {
				"number": {
					"value": 160,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
				},
				"opacity": {
					"value": 1,
					"random": true,
					"anim": {
						"enable": true,
						"speed": 1,
						"opacity_min": 0,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 4,
						"size_min": 0.3,
						"sync": false
					}
				},
				"line_linked": {
					"enable": false,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 1,
					"direction": "none",
					"random": true,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 600
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "bubble"
					},
					"onclick": {
						"enable": false,
						"mode": "repulse"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 250,
						"size": 0,
						"duration": 2,
						"opacity": 0,
						"speed": 3
					},
					"repulse": {
						"distance": 400,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		});
	}
