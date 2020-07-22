//You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

const minutesToSeconds = time => {
	const [minutes, seconds] = time.split(':').map(Number);
	return (seconds > 59) ? false : seconds + minutes * 60;
};