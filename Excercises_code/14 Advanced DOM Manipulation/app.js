const btn = document.querySelector('button');
/* let isPurple = false;

btn.addEventListener('click', function () {
	if (isPurple) {
		document.body.style.backgroundColor = 'white';
	} else {
		document.body.style.backgroundColor = 'purple';
	}
	isPurple = !isPurple;
}); */

btn.addEventListener('click', function () {
		document.body.classList.toggle('purple');
});