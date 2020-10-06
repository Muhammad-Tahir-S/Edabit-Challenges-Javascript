//Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.

function digitalClock(seconds) {
	let h = Math.floor(seconds/3600)
	if (h >= 24) {
		h -= 24
	}
	let m = Math.floor((seconds%3600)/60)
	let s = (seconds%3600)%60
	let arr = [h, m, s].map(el => {
		el = '' + el
		if (el.length < 2) {
			el = '0' + el
		}
		return el
	})
	return arr.join(':')
}