//You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

const minutesToSeconds = time => {
	let arr = time.split(':');
	if (Number(arr[1]) < 60){
	return (Number(arr[0])*60 + Number(arr[1]))}
	return false
}