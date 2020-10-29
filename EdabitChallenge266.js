//Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(r) {
	return Math.abs(r.reduce((a, c) => a + (-1) ** c.length, 0)) / 4 | 0;
}