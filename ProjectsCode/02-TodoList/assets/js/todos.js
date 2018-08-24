// Check Off Specifis Tosod By Clicking
$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
});
// Click on X to delete Todo
$('ul').on('click', 'span', function (e) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	e.stopPropagation();
});
// Grab input
$('input[type="text"]').keypress(function (e) {
	if (e.which === 13) {
		// Grab new todo text from input
		const todoText = $(this).val();
		$(this).val('');
		// Create a new li and add to ul
		$('ul').append(`<li><span>X</span> ${todoText}</li>`);
	}
});