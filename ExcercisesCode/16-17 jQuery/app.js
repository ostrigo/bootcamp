$('h1').click(function () {
	console.log('You clicked me!');
});

$('button').click(function () {
	const text = $(this).text();
	console.log('You clicked: ' + text);
});

$('input[type="text"]').keypress(function (e) {
	console.log($(this).val());
	if (e.which === 13) {
		alert('You hit enter!')
	}
});