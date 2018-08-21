let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetBtn = document.querySelector('#reset');
const modeBtns = document.querySelectorAll('.mode');

init();

function init() {
	setUpModeBtns();
	setUpSquares();
	reset();
}

function setUpModeBtns() {
	for (let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener('click', function () {
			modeBtns[0].classList.remove('selected');
			modeBtns[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
		});
	};
}

function setUpSquares() {
	for (let i = 0; i < squares.length; i++) {
		// Add click listeners to squares
		squares[i].addEventListener('click', function () {
			// Grab color of clicked square
			const clickedColor = this.style.backgroundColor;
			// Compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetBtn.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
				for (let i = 0; i < modeBtns.length; i++) {
					modeBtns[i].disabled = true;
					modeBtns[i].style.opacity = 0.2;
				}
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	for (let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].disabled = false;
		modeBtns[i].style.opacity = 1;
	}
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color
	pickedColor = pickColor();
	// Change colorDisplay
	colorDisplay.textContent = pickedColor;
	// Change color of squares
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = 'steelblue';
	resetBtn.textContent = 'New Colors';
	messageDisplay.textContent = '';
}

resetBtn.addEventListener('click', function () {
	reset();
});

function changeColors(color) {
	// Loop through all squares
	for (let i = 0; i < squares.length; i++) {
		// Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// Make an array
	const arr = [];
	// Add num random colors to arr
	for (let i = 0; i < num; i++) {
		// Get random color and push into arr
		arr.push(randomColor());
	}
	// Return that array
	return arr;
}

function randomColor() {
	// Pick a red from 0 - 255
	const r = Math.floor(Math.random() * 256);
	// Pick a green from 0 - 255
	const g = Math.floor(Math.random() * 256);
	// Pick a blue from 0 - 255
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`
}