//Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.

function washHands(N, nM) {
	s = nM*N*21*30
    minutes = parseInt(s/60)
    sec = s%60
    return `${minutes} minutes and ${sec} seconds`
}