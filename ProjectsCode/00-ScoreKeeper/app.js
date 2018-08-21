const p1Btn = document.querySelector('#p1');
const p2Btn = document.getElementById('p2');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const numInput = document.querySelector('input[type="number"]');
const winScoreDisp = document.querySelector('h5 span');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Btn.addEventListener('click', function (e) {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			p1Display.style.color = '#33cc33';
			p2Display.style.color = 'red';
			numInput.disabled = true;
		}
		p1Display.textContent = p1Score;
	}
	e.preventDefault();
});

p2Btn.addEventListener('click', function (e) {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			p2Display.style.color = '#33cc33';
			p1Display.style.color = 'red';
			numInput.disabled = true;
		}
		p2Display.textContent = p2Score;
	}
	e.preventDefault();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.style.color = 'black';
	p2Display.style.color = 'black';
	numInput.disabled = false;
}

resetBtn.addEventListener('click', function (e) {
	reset();
	e.preventDefault();
});

numInput.addEventListener('change', function (e) {
	winScoreDisp.textContent = this.value;
	winningScore = +this.value;
	reset();
});