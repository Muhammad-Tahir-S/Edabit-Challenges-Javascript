//Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(portion1, portion2) {
	return `${portion1.replace('/','')}/${portion2.replace('/','')}`;
}