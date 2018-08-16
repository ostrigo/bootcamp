const movies = [
	{
		title: 'In bruges',
		hasWathced: true,
		rating: 5
	},
	{
		title: 'Frozen',
		hasWathced: false,
		rating: 4.5
	},
	{
		title: 'Mad Max Fury Road',
		hasWathced: true,
		rating: 5
	},
	{
		title: 'Les Miserables',
		hasWathced: false,
		rating: 3.5
	},
]

function buildString(m) {
	let result = 'You have ';
	if (m.hasWathced) {
		result += 'watched ';
	} else {
		result += 'not seen ';
	}
	result += `"${m.title}" - ${m.rating} stars`;
	return result;
}

movies.forEach(function (movie) {
	console.log(buildString(movie));
});