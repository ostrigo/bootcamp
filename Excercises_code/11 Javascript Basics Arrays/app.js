/* function printReverse(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);;
	}
}

function isUniform(arr) {
	const first = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	let sum = 0;
	arr.forEach(item => {
		sum += item;
	});
	return sum;
}

function max(arr) {
	let maxNum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
	}
	return maxNum;
} */

/*** ForEach ***/
const nums = [1,2,3,4,5];

function myForEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

Array.prototype.myForEach = function (func) {
	for (let i = 0; i < this.length; i++) {
		func(this[i]);
	}
}