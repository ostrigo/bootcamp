function isEven(num) {
	return num % 2 === 0
}

function factorial(num) {
	let result = 1;
		for (let i = 2; i <= num; i++) {
			result *= i;
		}
		return result;
	}
	
function kebabToSnake(string) {
	const newString = string.replace(/-/gi, '_');
	return newString;
}