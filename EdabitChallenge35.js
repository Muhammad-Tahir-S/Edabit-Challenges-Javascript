// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

function inkLevels(inks) {
		return (Math.min(...Object.values(inks)))
}