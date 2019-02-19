function setMyTimer($id, deadline) {
	
	const $timer = document.getElementById($id);
	let timeInterval = setInterval(updateClock, 1000);

	function updateClock() {
		
		t = getTimeRemaining(deadline);
		if (t.total <= 0) {
			clearInterval(timeInterval); 		
		} else {
			$timer.querySelector('.hours').textContent = t.hours;
			$timer.querySelector('.minutes').textContent = t.minutes; 
			$timer.querySelector('.seconds').textContent = t.seconds; 			
		}
	}

	function getTimeRemaining(endTime) {

		let t = Date.parse(endTime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor(t / 1000 / 60 / 60);

		return {
			total: t,
			seconds: addZero(seconds),
			minutes: addZero(minutes),
			hours: addZero(hours)
		}
	}

	function addZero(n) {
		return (n < 10) ? '0' + n : n;
	}
}

window.addEventListener('DOMContentLoaded', () => {

	setMyTimer('timer', '2019-02-20');
	
});