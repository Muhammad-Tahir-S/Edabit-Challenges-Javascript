//Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

function is_potential_friend(s1, s2) {
	let f = s1.filter(v => s2.includes(v));
	return f.length >= 2 || f.length === s2.length;
}