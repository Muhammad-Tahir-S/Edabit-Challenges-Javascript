//Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName (obj, name, value) {
	return {...obj, [name]: value}
};