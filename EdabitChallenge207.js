//Create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

const reverseTitle = s => (
	s.replace(/\w+?(?=\b)/g, m => (
		m[0].toLowerCase() + m.slice(1).toUpperCase()
	))
);