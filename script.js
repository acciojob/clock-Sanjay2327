//your JS code here. If required.
let timeDisplay = document.getElementById("timer");

let currentTime = new Date() ;

setInterval(
	function () {
		currentTime= new Date
		timeDisplay.innerHTML = currentTime.toLocaleString();
	}, 1000 ;
) ;